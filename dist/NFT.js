"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("./web3"));
const SimpleCollectible_json_1 = require("./contracts/SimpleCollectible.json");
const address = '0x4Db54B34755392FAEb2349bAEAd039Dc1c383E1D';
const NFT = new web3_1.default.eth.Contract(SimpleCollectible_json_1.abi, address);
exports.default = NFT;
