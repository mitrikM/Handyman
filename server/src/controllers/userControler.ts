// userController.ts
import slugify from 'slugify';
import UserModel from '../models/User'
import { MyRequest } from '../interfaces/MyRequest'
import { MyResponse } from '../interfaces/MyResponse'

export const register = async (req: MyRequest, res: MyResponse) => {
  const user = new UserModel({
    _id: req.body._id,
    slug: slugify(req.body.userName, { lower: true }),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    userName: req.body.userName,
    password: req.body.password,
    birthDate: req.body.birthDate,
    mobileNumber: req.body.mobileNumber,
    city: req.body.city,
    updatedAt: req.body.lastUpdate,
    createdAt: req.body.createdAt,
    accountType: req.body.accountType
  })
  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err: any) {
    res.status(400).json({ message: err.message })
  }
}


export const getUsers = async (req: MyRequest, res: MyResponse) => {
  try {
    const users = await UserModel.find();
    if(users.length === 0) {
      res.status(204).json({ message: 'No users found' });
    } else {
      res.status(200).json(users);
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};



export const deleteUser = async (req:MyRequest, res:MyResponse) => {
  try {
    const user = res.locals.UserModel;

    await user.remove();
    res.status(200).json({ message: 'Deleted user' });
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
}

// userController.ts

export const updateUser = async (req:MyRequest, res:MyResponse) => {
  const user = res.locals.user; // get user from res.locals
  if (req.body.userName != null) {
    user.userName = req.body.userName;
  }
  try {
    const updatedUser = await user.save();
    res.json(updatedUser);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

export const getUser = (req: MyRequest, res: MyResponse) => {
  res.send(res.locals.UserModel)
}