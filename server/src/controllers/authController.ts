// userController.ts

import jwt, { Secret } from 'jsonwebtoken'
import { MyRequest } from '../interfaces/MyRequest'
import { MyResponse } from '../interfaces/MyResponse'
import UserModel from '../models/User'
import bcrypt from 'bcrypt'


export const loginUser = async (req: MyRequest, res: MyResponse) => {

  if (!req.body || !req.body.email || !req.body.password) {
    return res.status(400).json({ message: 'Missing email or password' })
  }
  let user
  try {
   user = await UserModel.findOne({ email: req.body.email }).exec()
    if (user === null) {
      return res.status(403).json({ message: "wrong email or password" })
    }
    const correctPassword = await bcrypt.compare(req.body.password, user.password)
    if (!correctPassword) {
      return res.status(403).json({ message: 'wrong email or password' })
    }
  } catch (err:any) {
    return res.status(500).json({message: err.message})
  }

  const verifiedUser: object = {
    '_id': user._id,
    'slug': user.slug,
    'firstName': user.firstName,
    'lastName': user.lastName,
    'email': user.email,
    'userName': user.userName,
    'contracts': user.contracts,
    'profile': user.profile,
  }

  const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET

  if (!refreshTokenSecret) {
    throw new Error('REFRESH_TOKEN_SECRET is not defined')
  }

  const secret: Secret = refreshTokenSecret
  const accessToken = generateAccessToken(verifiedUser)
  const refreshToken = jwt.sign(verifiedUser, secret)

  res.cookie('accessToken', accessToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none', // make strict before deploying app for production
    maxAge: 60 * 60 * 1000, //60 minutes
  })

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    secure: true,
    sameSite: 'none', // make strict before deploying app for production
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  })

  res.status(200).json({ message: 'Login successful' })
}


export const logoutUser = (req:MyRequest, res:MyResponse) => {
  const cookies = req.cookies
  if(!cookies?.accessToken) return res.sendStatus(204) //No content
  if(!cookies?.refreshToken) return res.sendStatus(204)
  res.clearCookie('accessToken', {httpOnly: true, sameSite: 'none', secure: true})
  res.clearCookie('refreshToken', {httpOnly: true, sameSite: 'none', secure: true})
  res.status(200).json({message: 'Logout successful'})
}

export const verifyToken = async (req:MyRequest, res:MyResponse) => {
  const accessToken = req.cookies.accessToken

  if (!accessToken) {
    return res.status(401).json({ isAuthenticated: false })
  }
  const accessTokenSecret=process.env.ACCESS_TOKEN_SECRET
  if(!accessTokenSecret){
    throw new Error('ACCESS_TOKEN_SECRET is not defined')
  }
  const secret:Secret=accessTokenSecret
  try {
    const decoded = jwt.verify(accessToken, secret)
    res.status(200).json({ isAuthenticated: true, user: decoded })
  } catch (error) {
    console.error('Error verifying token:', error)
    res.status(401).json({ isAuthenticated: false })
  }
}


export function generateAccessToken(user:object){
  const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET;

  if (!accessTokenSecret) {
    throw new Error('ACCESS_TOKEN_SECRET is not defined');
  }
  const secret: Secret = accessTokenSecret;
  return jwt.sign(user,secret,{expiresIn: '60m'});
}