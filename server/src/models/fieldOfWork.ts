// fieldOfWorkModel.ts
import mongoose, { Document, Schema } from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

interface FieldOfWork extends Document {
  _id: typeof ObjectId;
  name: string;
}

const FieldOfWorkSchema: Schema = new Schema(
  {
    _id: {
      type: ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
);

const FieldOfWorkModel= mongoose.model('FieldOfWork', FieldOfWorkSchema);
export default FieldOfWorkModel;
