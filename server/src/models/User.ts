import mongoose, { Document } from 'mongoose';
import UserProfileModel from './userProfile'
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

const UserSchema = new Schema(
  {
    _id: {
      type: ObjectId,
      auto: true,
    },

    slug: {
      type: String,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
      min: 2,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
      maxLength: 64,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
      match: /^(\+?\d{3}[- ]?)?\d{3}[- ]?\d{3}[- ]?\d{3}$/,
    },
    city: {
      type: String,
      required: true,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },

    activeProfile:{
      type: Boolean,
      default: false,
    },
    contracts: [{
      type: Schema.Types.ObjectId,
      ref: 'ContractInterface',
    }],
    profile:{
      type: Schema.Types.ObjectId,
      ref: 'UserProfile'
    }



  },
)
interface UserDocument extends Document {
  profile: typeof ObjectId;
  isNew: boolean;
}
UserSchema.pre<UserDocument>('save', async function (next: any) {
  const user:any = this;

  // Check if the user is new
  if (user.isNew) {
    try {
      // Create a new empty UserProfile
      const newUserProfile = new UserProfileModel({});

      // Save the new UserProfile
      const savedUserProfile = await newUserProfile.save();

      // Assign the created UserProfile's _id to the user's profile field
      user.profile = savedUserProfile._id;
    } catch (error:any) {
      return next(new Error(error));
    }
  }

  next();
});


// Create a Mongoose model for the user schema and export it
const UserModel = mongoose.model('User', UserSchema)
export default UserModel