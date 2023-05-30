import mongoose from 'mongoose';

const { Schema } = mongoose;

const ContractSchema = new Schema({
  _id: Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  doneIn: {
    type: String,
    required: true
  },
  offers: [{
    type: Schema.Types.ObjectId,
    ref: 'Offer',
  }],
  questions:[{
    type:Schema.Types.ObjectId,
    ref: 'Question'
  }],
  status: {
    type: String,
    default: 'Open',
  },
  salary: {
    type: String,
    required: true,
  },
  fieldOfWork:{
    type: Schema.Types.ObjectId,
    ref: 'fieldOfWork',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  location: {
    type: String,
    required: true,
  },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});

const ContractModel = mongoose.model('Contract', ContractSchema);
export default ContractModel;