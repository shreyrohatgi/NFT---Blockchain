import express from 'express'
import nftRouter from './routes/nftRoutes';

const app = express();
app.use(express.json())

//routes for nft
app.use('/api/nft',nftRouter)

app.listen(5000, () => {
    console.log(`Example app listening at http://localhost:3000`)
  })