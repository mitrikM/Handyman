// Middleware function for getting UserProfile by ID
import { NextFunction, Request } from 'express'
import { MyResponse } from '../interfaces/MyResponse'
import UserProfileModel from '../models/userProfile'

export async function getUserProfileById(req: Request, res: MyResponse, next: NextFunction) {
  let userProfile;
  try {
    userProfile = await UserProfileModel.findById(req.params.id);
    if (userProfile === null) {
      return res.status(404).json({ message: 'Cannot find UserProfile' });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }

  res.UserProfileModel = userProfile;
  next();
}