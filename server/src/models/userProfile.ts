// userProfileModel.ts
import mongoose, { Document, Schema } from 'mongoose';

import fieldOfWork from './fieldOfWork'
const ObjectId = mongoose.Types.ObjectId;

interface UserProfile extends Document {
  _id: typeof ObjectId;
  user: typeof ObjectId;
  profilePicture?: string;
  description?: string;
  fieldOfWork: typeof ObjectId;
}

const UserProfileSchema: Schema = new Schema(
  {
    _id: {
      type: ObjectId,
      auto: true,
    },
    profilePicture: {
      type: String, // Assuming the profile picture is stored as a URL or file path
      ref: 'image'
    },
    description: {
      type: String,
    },
    fieldOfWork: {
      type: ObjectId,
      ref: 'fieldOfWork',
    },
  },
);

const UserProfileModel = mongoose.model('UserProfile', UserProfileSchema);
export default UserProfileModel;
