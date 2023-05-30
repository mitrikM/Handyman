import mongoose from 'mongoose';

const { Schema } = mongoose;

const accountTypeSchema = new Schema(
  {
    name:{
      type: String,
      required: true
    }
  }
)

// Create a Mongoose model for the user schema and export it
const accountTypeModel = mongoose.model('Account type', accountTypeSchema)
export default accountTypeModel