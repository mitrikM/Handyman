// Middleware function for getting FieldOfWork by ID
import { NextFunction, Request } from 'express'
import { MyResponse } from '../interfaces/MyResponse'
import FieldOfWorkModel from '../models/fieldOfWork'

export async function getFieldOfWorkById(req: Request, res: MyResponse, next: NextFunction) {
  let fieldOfWork;
  try {
    fieldOfWork = await FieldOfWorkModel.findById(req.params.id);
    if (fieldOfWork === null) {
      return res.status(404).json({ message: 'Cannot find FieldOfWork' });
    }
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }

  res.FieldOfWorkModel = fieldOfWork;
  next();
}