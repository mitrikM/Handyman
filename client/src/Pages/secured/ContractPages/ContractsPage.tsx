import { ContractCard } from '../../../Components/Layout/ContractCard'
import React, { useEffect, useState } from 'react'
import { api } from '../../../API'
import { NavbarLoggedIn } from '../../../Components/LoggedInLayout/NavbarLoggedIn'
import { useOutletContext } from 'react-router'
import { CustomInput } from '../../../Components/FormComponents/CustomInput'
import SearchFilter from '../../../Components/SearchFilter'
import { Contract } from '../../../interface/ContractInterface'
import { Category } from '../../../interface/CategoryInterface'

export const ContractsPage: React.FC = () => {
  const [contracts, setContracts] = useState<Contract[]>([])
  const [user] = useOutletContext()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>('')

  // States from SearchFilter lifted up here
  const [title, setTitle] = useState<string>('')
  const [location, setLocation] = useState<string>('')
  const [chosenCategory, setChosenCategory] = useState<string>('')
  const [onlyOpenOffers, setOnlyOpenOffers] = useState<boolean>(false)
  const [category, setCategory] = useState<Category>([])

  useEffect(() => {
    const getContracts = () => {
      setIsLoading(true)
      api
        .get('contract')
        .then((r) => setContracts(r.data))
        .catch((e) => setError(e))
        .finally(() => {
          setIsLoading(false)
        })
    }
    const getCategories = () => {
      setIsLoading(true)
      api
        .get('fieldOfWorks')
        .then((r) => setCategory(r.data))
        .catch((e) => {
          setError(e)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    getContracts()
    getCategories()
  }, [])
  useEffect(() => {
    console.log(contracts)
  }, [contracts])

  const filteredContracts = contracts.filter((contract) => {
    return (
      contract.title.includes(title) &&
      contract.location.includes(location) &&
      (chosenCategory === '' || contract.fieldOfWork === chosenCategory) &&
      (!onlyOpenOffers || contract.status === 'Open')
    )
  })

  return (
    <div className={'min-h-screen white-color'}>
      <NavbarLoggedIn user={user} />

      <div className={'mt-9 '}>
        <SearchFilter
          title={title}
          setTitle={setTitle}
          location={location}
          setLocation={setLocation}
          chosenCategory={chosenCategory}
          setChosenCategory={setChosenCategory}
          onlyOpenOffers={onlyOpenOffers}
          setOnlyOpenOffers={setOnlyOpenOffers}
          category={category}
          setCategory={setCategory}
        />

        <div className={'flex-col w-full ml-40'}>
          {filteredContracts.length !== 0 &&
            filteredContracts.map(
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
            )}
        </div>
      </div>
    </div>
  )
}
