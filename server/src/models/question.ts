import mongoose from 'mongoose';
const { Schema } = mongoose;

const QuestionSchema = new Schema({
  _id:{
   type: Schema.Types.ObjectId,
    auto:true
  },
  question:{
    type:String,
    required:true
  },
  contract:{
    type: Schema.Types.ObjectId,
    ref: "Contract",
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now()
  },
  lastUpdate:{
    type:Date,
    default: Date.now()
  },
  createdBy:{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }
})

const questionModel = mongoose.model('Question',QuestionSchema);
export default questionModel;