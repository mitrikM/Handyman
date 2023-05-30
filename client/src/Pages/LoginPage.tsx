import { Navbar } from '../Components/Layout/Navbar'
import { CustomInput } from '../Components/FormComponents/CustomInput'
import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../API'
import { Footer } from '../Components/Layout/Footer'

export const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState({email: '', password: '', general: ''})


  const handlePasswordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(e.target.value)
    },
    [setPassword],
  )

  const handleEmailChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
    },
    [setEmail],
  )

  const validateForm = () => {
    let formIsValid = true;
    let errors = {email: '', password: ''};

    if (!email.trim()) {
      formIsValid = false;
      errors.email = "*Please enter your email.";
    }

    if (!password.trim()) {
      formIsValid = false;
      errors.password = "*Please enter your password.";
    }

    setError(errors);
    return formIsValid;
  }

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await api.post('/auth/login', {
        email: email,
        password: password,
      })
      if (response.status === 200) {
        console.log('login successful')
        navigate('/home')
      } else {
        setError(prevErrors => ({ ...prevErrors, general: 'Invalid email or password.' }))
        console.log('login failed')
      }
    } catch (e: any) {
      if (e.response && e.response.data && e.response.data.message) {
        // error message from the server, if available
        setError(prevErrors => ({ ...prevErrors, general: e.response.data.message }));
      } else {
        // default error message
        setError(prevErrors => ({ ...prevErrors, general: 'Unexpected error occurred. Please try again later.' }));
      }
    }
  }


  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (validateForm()){
      loginUser(email, password)
    }
  }

  return (
    <>
      <Navbar />
      <div className='min-h-screen primary-color flex flex-col justify-center'>
        <form method='post' onSubmit={handleSubmit} className='w-full'>
          <div className='flex flex-col items-center'>
            <div className='bg-[#F6F1F1] w-full sm:w-3/4 md:w-1/2 lg:w-2/5 xl:w-1/3 mx-auto p-8 rounded-2xl'>
              <h1 className='text-center mb-6 font-bold text-2xl'>Prihlásenie</h1>
              <div className='mx-auto w-full'>
                {error.general && <span className='err'>{error.general}</span>}
                <h3 className={'font-medium pb-2'}>Email</h3>
                <CustomInput
                  className='w-full mb-6 px-4 py-3 rounded border-2'
                  value={email}
                  label=''
                  name='email'
                  placeholder='enter your email'
                  type='string'
                  onChange={handleEmailChange}
                />
                {error.email && <span className='err'>{error.email}</span>}
                <h3 className={'font-medium pb-2'}>Heslo</h3>
                <CustomInput
                  className='w-full mb-6 px-4 py-3 rounded border-2'
                  value={password}
                  label=''
                  name='password'
                  placeholder='enter your password'
                  type='password'
                  onChange={handlePasswordChange}
                />
                {error.password && <span className='err'>{error.password}</span>}
                <button className='primary-button large-button w-full mb-6' type='submit'>
                  Log in
                </button>
              </div>
              <p className='text-center'>
                ak ste zabudli heslo kliknite{' '}
                <a href='#' className='underline'>
                  tu
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
