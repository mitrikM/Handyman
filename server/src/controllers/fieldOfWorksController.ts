import { Request } from 'express'
import { MyResponse } from '../interfaces/MyResponse'
import { MyRequest } from '../interfaces/MyRequest'
import FieldOfWorkModel from '../models/fieldOfWork'

export const fieldOfWorksDelete = async (req: MyRequest, res: MyResponse) => {
  try {
    await res.FieldOfWorkModel.remove();
    res.json({ message: 'Deleted FieldOfWork' });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export const fieldOfWorksUpdate = async (req: MyRequest, res: MyResponse) => {
  if (req.body.name != null) {
    res.FieldOfWorkModel.name = req.body.name;
  }
  try {
    const updatedFieldOfWork = await res.FieldOfWorkModel.save();
    res.json(updatedFieldOfWork);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}

export const fieldOfWorksCreate = async (req: Request, res: MyResponse) => {
  const fieldOfWork = new FieldOfWorkModel({
    name: req.body.name,
  });
  try {
    const newFieldOfWork = await fieldOfWork.save();
    res.status(201).json(newFieldOfWork);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}
export const fieldOfWorksGetOne = (req: Request, res: MyResponse) => {
  res.send(res.FieldOfWorkModel);
}

export const fieldOfWorksGetAll = async (req: Request, res: MyResponse) => {
  try {
    const fieldOfWorks = await FieldOfWorkModel.find();
    res.status(200).json(fieldOfWorks);
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
}