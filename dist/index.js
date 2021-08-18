"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const nftRoutes_1 = __importDefault(require("./routes/nftRoutes"));
const app = express_1.default();
app.use(express_1.default.json());
//routes for nft
app.use('/api/nft', nftRoutes_1.default);
app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:3000`);
});
