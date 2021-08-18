import web3 from './web3'
import { AbiItem } from 'web3-utils'
import { abi } from './contracts/NFT.json'

const address = '0x4Db54B34755392FAEb2349bAEAd039Dc1c383E1D'

const NFT = new web3.eth.Contract(abi as AbiItem[], address)

export default NFT
