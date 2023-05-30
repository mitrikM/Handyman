import express from 'express'
import * as dotenv from 'dotenv';

import { getPassword } from '../midlewares/getPassword'
import { getUserById } from '../midlewares/getUserById'
import { MyResponse } from '../interfaces/MyResponse'
import { deleteUser, getUser, getUsers, register, updateUser } from '../controllers/userControler'
import { MyRequest } from '../interfaces/MyRequest'
const router = express.Router()
dotenv.config();
// Getting all
router.get('/', getUsers)
// Getting one
router.get('/:id', getUserById, getUser)
// Creating user
router.post('/register', getPassword, register)
//Updating one
router.patch('/:id', getUserById, updateUser)
// Deleting user
router.delete('/:id', getUserById, deleteUser);

module.exports = router