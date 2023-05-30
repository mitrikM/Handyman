import express, { NextFunction, Request, Response } from 'express'
import FieldOfWorkModel from '../models/fieldOfWork'
import { MyResponse } from '../interfaces/MyResponse'
import { getFieldOfWorkById } from '../midlewares/getFieldOfWorkById'
import {
  fieldOfWorksCreate,
  fieldOfWorksDelete, fieldOfWorksGetAll,
  fieldOfWorksGetOne,
  fieldOfWorksUpdate,
} from '../controllers/fieldOfWorksController'

const router = express.Router();

// Getting all FieldOfWorks
router.get('/', fieldOfWorksGetAll);

// Getting one FieldOfWork
router.get('/:id', getFieldOfWorkById, fieldOfWorksGetOne);

// Creating FieldOfWork
router.post('/', fieldOfWorksCreate);


// Updating one FieldOfWork
router.patch('/:id', getFieldOfWorkById, fieldOfWorksUpdate);

// Deleting FieldOfWork
router.delete('/:id', getFieldOfWorkById, fieldOfWorksDelete);



export default router;