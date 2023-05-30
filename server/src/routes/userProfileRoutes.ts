import express, { NextFunction, Request, Response } from 'express';
import UserProfileModel from '../models/userProfile';
import { MyRequest } from '../interfaces/MyRequest'
import { MyResponse } from '../interfaces/MyResponse'
import { getUserProfileById } from '../midlewares/getUserProfileById'
import { authenticationOfUser } from '../midlewares/authenticationOfUser'

const router = express.Router();




// Get all UserProfiles
router.get('/', authenticationOfUser, async (req: MyRequest, res: MyResponse) => {
  try {
    const userProfile = await UserProfileModel.findOne({ _id: (req.user as any).profile });
    if (userProfile) {
      res.status(200).json(userProfile);
    } else {
      res.status(404).json({ message: "Profile not found" });
    }
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});


// Get one UserProfile by ID
router.get('/:id', authenticationOfUser, getUserProfileById, (req: Request, res: MyResponse) => {
  res.json(res.UserProfileModel);
});

// Create a UserProfile
router.post('/', async (req: MyRequest, res: MyResponse) => {
  const userProfile = new UserProfileModel({
    profilePicture: req.body.profilePicture,
    description: req.body.description,
    fieldOfWork: req.body.fieldOfWork,
  });

  try {
    const newUserProfile = await userProfile.save();
    res.status(201).json(newUserProfile);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Update a UserProfile by ID
router.patch('/:id',authenticationOfUser, getUserProfileById, async (req: Request, res: MyResponse) => {
  if (req.body.profilePicture != null) {
    res.UserProfileModel.profilePicture = req.body.profilePicture;
  }
  if (req.body.description != null) {
    res.UserProfileModel.description = req.body.description;
  }
  if (req.body.fieldOfWork != null) {
    res.UserProfileModel.fieldOfWork = req.body.fieldOfWork;
  }

  try {
    const updatedUserProfile = await res.UserProfileModel.save();
    res.json(updatedUserProfile);
  } catch (err: any) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a UserProfile by ID
router.delete('/:id', getUserProfileById, async (req: Request, res: MyResponse) => {
  try {
    await res.UserProfileModel.remove();
    res.json({ message: 'Deleted UserProfile' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
});



export default router;
