import mongoose from 'mongoose';

const { Schema } = mongoose;

const ImageSchema = new Schema({
  path: {
    type: String,
    required: true,
  },
});

const ImageModel = mongoose.model('Image', ImageSchema);
export default ImageModel;