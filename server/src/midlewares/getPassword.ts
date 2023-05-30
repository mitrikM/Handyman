// Middleware function that takes password and hash it
import { NextFunction, Request, Response } from 'express'
import bcrypt from 'bcrypt'
import { MyResponse } from '../interfaces/MyResponse'


export async function getPassword(req: Request, res: MyResponse, next: NextFunction) {
  let password: string = ''
  try {
    password = req.body.password
    if (password.length < 8) {
      return res.status(400).json({ message: 'short password' })
    }
    const salt = await bcrypt.genSalt()
    password = await bcrypt.hash(password, salt)
    req.body.password = password
    next()
  } catch (err: any) {
    res.status(500).json({ message: err.message })
  }
}