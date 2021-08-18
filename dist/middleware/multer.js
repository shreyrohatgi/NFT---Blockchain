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
exports.Upload = void 0;
const multer_1 = __importDefault(require("multer"));
const Upload = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    multer_1.default({
        storage: multer_1.default.diskStorage({
            destination: function (req, _file, cb) {
                cb(null, '/Users/lovish/projects/NFT-practise/src/middleware/uploads');
            },
            filename: function (_req, file, cb) {
                cb(null, file.originalname);
            }
        })
    }).single('file')(req, res, function (err) {
        next();
    });
});
exports.Upload = Upload;
