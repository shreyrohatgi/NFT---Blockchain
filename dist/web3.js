"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const web3_1 = __importDefault(require("web3"));
const address = 'HTTP://127.0.0.1:7545';
const mnemonics = 'attitude near adapt glory figure focus noble rigid bamboo oval report exotic';
const hdwallet_provider_1 = __importDefault(require("@truffle/hdwallet-provider"));
const provider = new hdwallet_provider_1.default(mnemonics, address);
//@ts-ignore
const web3 = new web3_1.default(provider);
exports.default = web3;
