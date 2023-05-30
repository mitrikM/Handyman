import React, { useEffect, useState } from 'react'
import { api } from '../../../API'
import { useOutletContext } from 'react-router'
import { ContractCard } from '../../../Components/Layout/ContractCard'
import { Contract } from '../../../interface/ContractInterface'
import { NavbarLoggedIn } from '../../../Components/LoggedInLayout/NavbarLoggedIn'

export const MyContractsPage = () => {
  const [user] = useOutletContext()
  const [contracts, setContracts] = useState<Contract[]>([])
  const [error, setError] = useState()
  const [loading, setIsLoading] = useState(false)
  useEffect(() => {
    const getContracts = () => {
      setIsLoading(true)
      api.get(`/contract/contractsOfUser/${user._id}`)
        .then(r => {
          r.status === 204 ? setContracts([]) : setContracts(r.data.contracts)
          console.log(contracts)
        })
        .catch((e) => {
          setError(e)
        })
        .finally(() => setIsLoading(false))
    }
    getContracts()
  }, [])

  return (
    <>
      <NavbarLoggedIn user={user} />
      <div className={'mt-9'}>

        {contracts.length !== 0 ?
          contracts.map(
            ({
               _id,
               description,
               fieldOfWork,
               title,
               doneIn,
               location,
               status,
               salary,
               offers,
             }) => {
              return (
                <ContractCard
                  key={_id}
                  _id={_id}
                  salary={salary}
                  description={description}
                  title={title}
                  doneIn={doneIn}
                  location={location}
                  status={status}
                  offers={offers}
                  fieldOfWork={fieldOfWork}
                />
              )
            },
          )
          :
          <div className={'flex justify-center'}>
            <h1 className={'font-bold text-2xl '}>nemáte žiadne zákazky</h1>

          </div>
        }
      </div>
    </>
  )
}
