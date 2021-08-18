import Web3 from 'web3'

const address ='HTTP://127.0.0.1:7545'
const mnemonics = 'attitude near adapt glory figure focus noble rigid bamboo oval report exotic'
import HDWalletProvider from '@truffle/hdwallet-provider'
const provider = new HDWalletProvider(mnemonics, address)

//@ts-ignore
const web3 = new Web3(provider)

export default web3
