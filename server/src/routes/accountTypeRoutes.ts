import express, { NextFunction, Request, Response } from 'express';
import AccountTypeModel from '../models/accountType';
import { MyResponse } from '../interfaces/MyResponse'
import { getAccountTypeById } from '../midlewares/getAccountTypeById'

const router = express.Router();


// Getting all AccountTypes
router.get('/', async (req: Request, res: MyResponse) => {
  try {
    const accountTypes = await AccountTypeModel.find();
    res.status(200).json(accountTypes);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});

// Getting one AccountType
router.get('/:id', getAccountTypeById, (req: Request, res: MyResponse) => {
  res.send(res.AccountTypeModel);
});

// Creating AccountType
router.post('/', async (req: Request, res: MyResponse) => {
  const accountType = new AccountTypeModel({
    name: req.body.name,
  });
  try {
    const newAccountType = await accountType.save();
    res.status(201).json(newAccountType);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Updating one AccountType
router.patch('/:id', getAccountTypeById, async (req: Request, res: MyResponse) => {
  if (req.body.name != null) {
    res.AccountTypeModel.name = req.body.name;
  }
  try {
    const updatedAccountType = await res.AccountTypeModel.save();
    res.json(updatedAccountType);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Deleting AccountType
router.delete('/:id', getAccountTypeById, async (req: Request, res: MyResponse) => {
  try {
    await res.AccountTypeModel.remove();
    res.json({ message: 'Deleted AccountType' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});



export default router;
