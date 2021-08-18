"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const nft_storage_1 = require("nft.storage");
const multer_1 = require("../middleware/multer");
const web3_1 = __importDefault(require("../web3"));
const nftRouter = express_1.default.Router();
const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVhNUU4NzBBRjE3MDRBMGVkZEIxNTUzMWE0NDQxQjBCZjExNkE1NTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMjA5NDY5MDA1OSwibmFtZSI6Im5mdCJ9.fO3XTBeaFiFg0V0BjY6_2DVnzbmWPiYPZ7aiZQs52nQ';
const client = new nft_storage_1.NFTStorage({ token: apiKey });
nftRouter.get('/', multer_1.Upload, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description } = req.body;
    const file = req.file;
    const accounts = web3_1.default.eth.getAccounts();
    const metadata = yield client.store({
        name,
        description,
        image: new nft_storage_1.File([yield fs_1.default.promises.readFile(`/Users/lovish/projects/NFT-practise/src/middleware/uploads/${file.originalname}`)], file.originalname, { type: file.mimetype })
    });
}));
exports.default = nftRouter;
