import { NextFunction, Request, Response } from 'express'
import UserModel from '../models/User'
import { MyResponse } from '../interfaces/MyResponse'

export async function getUserById(req: Request, res: MyResponse, next: NextFunction) {
  let user
  try {
    user = await UserModel.findById(req.params.id)
    if (user === null) {
      return res.status(404).json({ message: 'Can not find user' })
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message })
  }

  res.locals.UserModel = user
  next()
}