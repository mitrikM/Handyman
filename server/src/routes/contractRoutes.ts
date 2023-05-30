import {Router} from 'express'
import { authenticationOfUser } from '../midlewares/authenticationOfUser'
import {
  createContract,
  deleteContract, getAllContractsOfOneUser,
  getContract,
  getContracts,
  updateContract,
} from '../controllers/contractController'

const router = Router()

router.get('/', authenticationOfUser,getContracts)

router.get('/contractsOfUser/:_id',getAllContractsOfOneUser)

router.post('/', authenticationOfUser,createContract)

router.get('/:_id',authenticationOfUser,getContract)

router.put('/:id',authenticationOfUser,updateContract)

router.delete('/:id',authenticationOfUser,deleteContract)

export default router