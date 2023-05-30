import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { api } from '../../../API'
import { NavbarLoggedIn } from '../../../Components/LoggedInLayout/NavbarLoggedIn'
import { useOutletContext } from 'react-router'
import { ContractStatus } from '../../../Components/ContractComponents/ContractStatus'
import { ContractHeader } from '../../../Components/ContractComponents/ContractHeader'
import { ContractDetail } from '../../../Components/ContractComponents/ContractDetail'
import { ContractOffers } from '../../../Components/ContractComponents/ContractOffers'
import { ContractQuestions } from '../../../Components/ContractComponents/ContractQuestions'
import { Footer } from '../../../Components/Layout/Footer'

interface Params {
  _id: string
}

interface ContractDetail {
  _id: string
  description: string
  doneIn: string
  offers: number[]
  questions: number[]
  status: string
  salary: string
  fieldOfWork: number
  createdAt: Date
  updatedAt: Date
  location: string
  createdBy: number
  title: string
}

export const ContractDetailPage = () => {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [detail, setDetail] = useState<ContractDetail | null>(null)
  const [error, setError] = useState<string>('')
  const [user] = useOutletContext()
  const [userName,setUserName]=useState('')
  useEffect(() => {
    const getContractDetail = () => {
      setIsLoading(true)
      api
        .get(`contract/${id}`)
        .then((response) => {
          setDetail(response.data.contract)
          setUserName(response.data.userName)
        })
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false))
    }
    getContractDetail()
  }, [])

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>{error}</h1>
  }

  return (
    detail && (
      <div className={'min-h-screen white-color '}>
        <NavbarLoggedIn user={user} />
        <div className={'min-h-screen mt-6 bg-white max-w-6xl mx-auto '}>
          <div className={'px-20'}>
            <ContractStatus status={detail.status} />
            <ContractHeader
              title={detail.title}
              doneIn={detail.doneIn}
              location={detail.location}
              createdBy={detail.createdBy}
              salary={detail.salary}
              userName={userName}
            />
            <ContractDetail description={detail.description} />
            <ContractOffers offers={detail.offers} />
            <ContractQuestions questions={detail.questions} />
          </div>
        </div>
      </div>
    )
  )
}
