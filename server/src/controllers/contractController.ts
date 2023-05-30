// contractController.ts
import mongoose, { Types } from 'mongoose'
import ContractModel from '../models/contract'
import UserModel from '../models/User'
import { MyRequest } from '../interfaces/MyRequest'
import { MyResponse } from '../interfaces/MyResponse'

export const getContracts = async (req: MyRequest, res: MyResponse) => {
  try {
    const contracts = await ContractModel.find()
    res.status(200).json(contracts)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
export const getAllContractsOfOneUser = async (req: MyRequest, res: MyResponse) => {

  const user = req.params._id
  if (!user) {
    res.status(400).json({ error: 'No user id' })
    return
  }
  ContractModel.find({ createdBy: user })
    .then(contracts => {
      if (contracts.length === 0) return res.status(204).json({ message: 'No contracts found' })
      else res.status(200).json({ contracts })
    })
    .catch(error => {
      res.status(500).json(error)
    })

}
export const getContract = async (req: MyRequest, res: MyResponse) => {
  try {
    const contract = await ContractModel.findById(req.params._id)
    if (!contract) {
      res.status(404).json({ error: 'Contract not found' })
      return
    }
    const owner = await UserModel.findById(contract.createdBy)
    if(!owner){
      res.status(404).json({error: 'Creator of contract not found'})
      return
    }
    const userName = owner.userName
    res.json({'contract':contract,'userName':userName})
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }

}
export const updateContract = async (req: MyRequest, res: MyResponse) => {
  try {
    const updatedContract = await ContractModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updatedContract) {
      res.status(404).json({ error: 'Contract not found' })
      return
    }
    res.json(updatedContract)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
export const createContract = async (req: MyRequest, res: MyResponse) => {
  try {
    const userId = req.user._id
    const user = await UserModel.findById(userId)

    if (!user) {
      res.status(404).json({ error: 'User not found' })
      return
    }

    const contract = new ContractModel({
      _id: new mongoose.Types.ObjectId(),
      createdBy: userId,
      ...req.body,
    })
    const savedContract = await contract.save()
    user.contracts.push(savedContract._id)
    await user.save()

    res.status(201).json(savedContract)
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}
export const deleteContract = async (req: MyRequest, res: MyResponse) => {
  try {
    const userId = req.user._id
    const contractId = req.params.id
    const contract = await ContractModel.findById(contractId)

    if (!contract) {
      res.status(404).json({ error: 'ContractInterface not found' })
      return
    }

    if (String(contract.createdBy) !== userId) {
      res.status(403).json({ error: 'Not authorized to delete this contract' })
      return
    }
    await ContractModel.findByIdAndRemove(contractId)

    // Update the user's contracts array
    const user = await UserModel.findById(userId)
    if (!user) {
      res.status(404).json({ error: 'User not found' })
      return
    }
    (user.contracts as Types.Array<Types.ObjectId>).pull(contractId) // Explicitly define the type before calling the pull method
    await user.save()

    res.status(200).json({ message: 'Contract successfully deleted' })
  } catch (error: any) {
    res.status(500).json({ error: error.message })
  }
}