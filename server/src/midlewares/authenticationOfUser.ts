import { MyRequest } from '../interfaces/MyRequest'
import { NextFunction } from 'express'
import { MyResponse } from '../interfaces/MyResponse'
import jwt, { Secret } from 'jsonwebtoken'

export const authenticationOfUser = (req:MyRequest, res:MyResponse, next:NextFunction)=>{
  const accessToken= req.cookies.accessToken;
  const accessTokenSecret= process.env.ACCESS_TOKEN_SECRET;
  if (!accessTokenSecret) {
    throw new Error('ACCESS_TOKEN_SECRET is not defined');
  }
  if(!accessToken){
    return res.status(401).json({message: 'Access denied. User not authenticated '})
  }
  try{
    const verified = jwt.verify(accessToken,accessTokenSecret as string)
    req.user=verified;
    next();
  }catch (e:any){
    res.status(400).json({message: 'Invalid token'})
  }

}