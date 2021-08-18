import express, { Request, Response } from 'express'
import fs from 'fs'
import {NFTStorage,File} from 'nft.storage'
import { Upload } from '../middleware/multer'
import NFT from '../NFT'
import web3 from '../web3'
const nftRouter = express.Router()

const apiKey = 
'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDVhNUU4NzBBRjE3MDRBMGVkZEIxNTUzMWE0NDQxQjBCZjExNkE1NTgiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTYyMjA5NDY5MDA1OSwibmFtZSI6Im5mdCJ9.fO3XTBeaFiFg0V0BjY6_2DVnzbmWPiYPZ7aiZQs52nQ'
 const client = new NFTStorage({ token: apiKey })

nftRouter.get('/',Upload,async (req:Request,res:Response)=>{
    const {name,description}=req.body
    const file = req.file
    const accounts = await web3.eth.getAccounts()

    const metadata = await client.store({
      name,
      description,
      image: new File([ await fs.promises.readFile(`/Users/lovish/projects/NFT-practise/src/middleware/uploads/${file.originalname}`)], file.originalname, { type: file.mimetype })
    })

    const result = await NFT.methods.createCollectible(metadata.url).send({from: accounts[0]})
    res.send(result)

})

export default nftRouter