//import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { HomePage } from './Pages/HomePage'
import { RegistrationPage } from './Pages/RegistrationPage'
import { LoginPage } from './Pages/LoginPage'
import { HomePageSecured } from './Pages/secured/HomePageSecured'
import PrivateRoutes from './utils/PrivateRoutes'
import React from 'react'
import { AddNewContractPage } from './Pages/secured/ContractPages/AddNewContractPage'
import { ContractsPage } from './Pages/secured/ContractPages/ContractsPage'
import { ContractDetailPage } from './Pages/secured/ContractPages/ContractDetailPage'
import { MyContractsPage } from './Pages/secured/ContractPages/MyContractsPage'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<HomePage />} />
        <Route path={'register'} element={<RegistrationPage />} />
        <Route path={'login'} element={<LoginPage />} />
        <Route element={<PrivateRoutes />}>
          <Route path={'home'} element={<HomePageSecured />} />
          <Route path={'new-contract'} element={<AddNewContractPage/>} />
          <Route path={'contracts'} element={<ContractsPage/>}/>
          <Route path={'contract/:id'} element={<ContractDetailPage/>}/>
          <Route path = {'myContracts'} element={<MyContractsPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
