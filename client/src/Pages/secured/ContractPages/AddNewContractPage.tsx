import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import cross from '../../../assets/x-mark.png'
import { CustomInput } from '../../../Components/FormComponents/CustomInput'
import { api } from '../../../API'
import { NavbarLoggedIn } from '../../../Components/LoggedInLayout/NavbarLoggedIn'
import { useOutletContext } from 'react-router'

export const AddNewContractPage = () => {
  const [user] = useOutletContext()
  const [title, setTitle] = useState('')
  const [doneIn, setDoneIn] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [salary, setSalary] = useState('')
  const [categories, setCategories] = useState([])
  const [fieldOfWork, setFieldOfWork] = useState('')
  const [errors, setErrors] = useState({
    title: '',
    doneIn: '',
    location: '',
    description: '',
    salary: '',
    fieldOfWork: '',
  })

  useEffect(() => {
    api.get('/fieldOfWorks').then((r) => setCategories(r.data))
  }, [])

  const navigate = useNavigate()

  const validateInputs = () => {
    let errorsFound = false
    let newErrors = { ...errors }

    if (!title.trim()) {
      newErrors.title = 'Doplnte titulok zákazky'
      errorsFound = true
    } else {
      newErrors.title = ''
    }

    if (!doneIn.trim()) {
      newErrors.doneIn = 'Doplnte dátum vykonania zákazky'
      errorsFound = true
    } else {
      newErrors.doneIn = ''
    }

    if (!location.trim()) {
      newErrors.location = 'Doplnte mesto kde sa nachádzate'
      errorsFound = true
    } else {
      newErrors.location = ''
    }
    if (fieldOfWork === '') {
      newErrors.fieldOfWork = 'Doplnte kategóriu'
      errorsFound = true
    } else {
      newErrors.description = ''
    }
    if (!description.trim()) {
      newErrors.description = 'Doplnte detaily o zákazke'
      errorsFound = true
    } else {
      newErrors.description = ''
    }

    if (!salary.trim()) {
      newErrors.salary = 'Zadajte rozpočet'
      errorsFound = true
    } else {
      newErrors.salary = ''
    }
    setErrors(newErrors)
    return errorsFound
  }
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (validateInputs()) {
      return
    }
    try {
      await api.post('contract', {
        title: title,
        doneIn: doneIn,
        description: description,
        salary: salary,
        location: location,
        fieldOfWork: fieldOfWork,
      })

      setDescription('')
      setLocation('')
      setSalary('')
      setTitle('')
      setDoneIn('')
      setFieldOfWork('')
    } catch (e) {
      console.log(e)
    } finally {
      navigate('/home')
    }
  }

  return (
    <div className={'primary-color min-h-screen'}>
      <NavbarLoggedIn user={user} />
      <div className='white-color max-w-7xl mt-12 pt-3 pb-10 mx-auto rounded-2xl px-4 sm:px-6 lg:px-8'>
        <form onSubmit={handleSubmit} method='POST'>
          <h1 className=' text-2xl font-bold mt-6'>Nová zákazka</h1>
          <h2 className='text-xl font-semibold mt-4'>Základné údaje</h2>
          <div className='flex justify-between -mx-2 mt-4'>
            <div className='flex-initial w-1/2 px-2'>
              <div className='mb-4'>
                <h4 className='font-semibold'>Titulok zákazky</h4>
                <CustomInput
                  value={title}
                  label=''
                  name='title'
                  placeholder='Titulok zákazky'
                  type='text'
                  onChange={(e) => setTitle(e.target.value)}
                  className='border-2 rounded-xl w-1/2 pl-2 mt-1'
                />
                <p className='text-red-500'>{errors.title}</p>
              </div>
              <div className='mb-4'>
                <h4 className='font-semibold'>Kedy to potrebujete</h4>
                <CustomInput
                  value={doneIn}
                  label=''
                  name='doneIn'
                  placeholder='Dátum'
                  type='date'
                  onChange={(e) => setDoneIn(e.target.value)}
                  className='border-2 rounded-xl w-1/2 px-2 mt-1'
                />
                <p className='text-red-500'>{errors.doneIn}</p>
              </div>
              <div className='mb-4'>
                <h4 className='font-semibold'>Mesto</h4>
                <CustomInput
                  value={location}
                  label=''
                  name='Mesto'
                  placeholder='Zadajte miesto vykonania'
                  type='text'
                  onChange={(e) => setLocation(e.target.value)}
                  className='border-2 rounded-xl w-1/2 pl-2 mt-1'
                />
                <p className='text-red-500'>{errors.location}</p>
              </div>
              <div className='mb-4'>
                <h4 className='font-semibold'>Rozpočet</h4>
                <CustomInput
                  value={salary}
                  label=''
                  name='Budget'
                  placeholder='Zadajte svoj rozpočet'
                  type='number'
                  onChange={(e) => setSalary(e.target.value)}
                  className='border-2 rounded-xl w-1/2 pl-2 mt-1'
                />
                <p className='text-red-500'>{errors.salary}</p>
              </div>
              <div className='mb-4'>
                <h4 className='font-semibold'>Obor</h4>
                <select
                  value={fieldOfWork}
                  onChange={(e) => setFieldOfWork(e.target.value)}
                  className='border-2 rounded-xl w-1/2 px-2 mt-1'
                >
                  <option value=''>Vyberte obor</option>
                  {categories.map((category: any) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
                <p className={'text-red-500'}>{errors.fieldOfWork}</p>
              </div>
            </div>
            <div className='flex-initial w-1/2 px-2'>
              <div className='mb-4'>
                <h4 className='font-semibold'>Detail</h4>
                <textarea
                  id='description'
                  value={description}
                  name='description'
                  rows={12}
                  className='block w-full border-2 rounded py-1.5 mt-1'
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
              <p className='text-red-500'>{errors.description}</p>
            </div>
          </div>
          <button
            className='large-button third-button px-6 py-2 font-bold text-white bg-blue-600 rounded'
            type='submit'
          >
            Pridať zákazku
          </button>
        </form>
      </div>
    </div>
  )
}
