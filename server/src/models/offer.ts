import mongoose from 'mongoose';

const { Schema } = mongoose;

const OfferSchema = new Schema({
  _id:{
    type: Schema.Types.ObjectId,
    auto:true,
  },
  contractId: {
    type: Schema.Types.ObjectId,
    ref: 'ContractInterface',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  price:{
    type: String,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
});

const OfferModel = mongoose.model('Offer', OfferSchema);
export default OfferModel;