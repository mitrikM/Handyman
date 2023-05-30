// Middleware function for getting AccountType by ID
import { NextFunction, Request } from 'express'
import { MyResponse } from '../interfaces/MyResponse'
import AccountTypeModel from '../models/accountType'

export async function getAccountTypeById(req: Request, res: MyResponse, next: NextFunction) {
  let accountType;
  try {
    accountType = await AccountTypeModel.findById(req.params.id);
    if (accountType === null) {
      return res.status(404).json({ message: 'Cannot find AccountType' });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }

  res.AccountTypeModel = accountType;
  next();
}