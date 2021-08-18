import {NextFunction, Request,Response} from 'express'
import multer from 'multer'

export const Upload = async(req:Request, res:Response,next:NextFunction) => {
    multer({
      storage: multer.diskStorage({
        destination: function (req, _file, cb) {
          cb(null, '/Users/lovish/projects/NFT-practise/src/middleware/uploads')
        },
        filename: function (_req, file, cb) {
          cb(null, file.originalname)
          
        }
      })
    }).single('file')(req, res, function (err:any) {
      next()
    })
  }

