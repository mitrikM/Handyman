import React, { useState, ChangeEvent, FormEvent } from 'react'
import { api } from '../API'
import { RegistrationForm } from '../Components/FormComponents/RegistrationForm'
import { Navbar } from '../Components/Layout/Navbar'
import placeholder from '../assets/placeholder.jpg'
import { useNavigate } from 'react-router-dom'

interface User {
  firstName: string,
  lastName: string,
  email: string,
  userName: string,
  password: string,
  confirmPassword: string,
  birthDate: string,
  mobileNumber: string,
  city: string
}

interface Errors {
  firstName?: string,
  lastName?: string,
  email?: string,
  userName?: string,
  password?: string,
  confirmPassword?: string,
  birthDate?: string,
  mobileNumber?: string,
  city?: string
}

export const RegistrationPage = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<User>({
    firstName: '',
    lastName: '',
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    birthDate: '',
    mobileNumber: '',
    city: '',
  })

  const [error, setError] = useState<Errors>({})

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {

    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const validateForm = (): boolean => {
    let formIsValid = true;
    let errors: Errors = {};

    if (!user.firstName.trim()) {
      formIsValid = false;
      errors["firstName"] = "*Please enter your first name.";
    }

    if (!user.lastName.trim()) {
      formIsValid = false;
      errors["lastName"] = "*Please enter your last name.";
    }

    if (!user.email.trim()) {
      formIsValid = false;
      errors["email"] = "*Please enter your email.";
    } else {
      // email validation rule can be improved
      if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(user.email)) {
        formIsValid = false;
        errors["email"] = "*Please enter a valid email.";
      }
    }

    if (!user.userName.trim()) {
      formIsValid = false;
      errors["userName"] = "*Please enter your user name.";
    }

    if (!user.password.trim()){
      formIsValid = false;
      errors["password"]="*Please enter your password.";
    }

    else if(user.password.length < 8){
      formIsValid = false;
      errors["password"]="*Password needs to be at least 8 characters long.";
    }

    else if (user.password !== user.confirmPassword) {
      formIsValid = false;
      errors["confirmPassword"] = "*Passwords don't match.";
    }

    if (!user.birthDate.trim()) {
      formIsValid = false;
      errors["birthDate"] = "*Please enter your birth date.";
    } else {
      const birthDate = new Date(user.birthDate);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        formIsValid = false;
        errors["birthDate"] = "*You must be at least 18 years old.";
      }
    }

    if (!user.mobileNumber.trim()) {
      formIsValid = false;
      errors["mobileNumber"] = "*Please enter your mobile number.";
    } else {
      if (!/^\+\d{3} \d{3} \d{3} \d{3}$/.test(user.mobileNumber)) {
        formIsValid = false;
        errors["mobileNumber"] = "*Mobile number should be in format '+XXX XXX XXX XXX'.";
      }
    }

    if (!user.city.trim()) {
      formIsValid = false;
      errors["city"] = "*Please enter your city.";
    }

    setError(errors);
    return formIsValid;
  }

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    if (!validateForm()) {
      return;
    }

    api
      .post(`/users/register`, user)
      .then(() => {
        setUser({
          firstName: '',
          lastName: '',
          email: '',
          userName: '',
          password: '',
          confirmPassword: '',
          birthDate: '',
          mobileNumber: '',
          city: '',
        })
      })
      .catch((error) => console.log(error))
      .finally(() => navigate('/'))
  }

  return (
    <div className={'min-h-screen white-color'}>
      <Navbar />
      <div className={'min-w-full flex '}>
        <div className={'w-1/2'}>
          <img className={'min-h-screen '} src={placeholder} />
        </div>
        <div className={''}>
          <RegistrationForm user={user} setUser={setUser} handleOnSubmit={handleOnSubmit} error={error} onInputChange={onInputChange} />
        </div>
      </div>
    </div>
  )
}
