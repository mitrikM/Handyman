import React, { ChangeEvent, useState } from 'react'
import { CustomInput } from './CustomInput'

interface Props {
  user: any,
  setUser: React.Dispatch<React.SetStateAction<any>>
  handleOnSubmit: (event: React.FormEvent) => void
  error: any
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const RegistrationForm = ({ user, setUser, handleOnSubmit, error, onInputChange}: Props) => {






  return (
    <div className={'pl-8 pt-14 w-max'}>
      <form onSubmit={handleOnSubmit}>
        <h1 className={'font-bold text-3xl pb-4'}>Registrácia</h1>
        <div className={'space-y-2'}>
          <div className={'flex'}>
            <div>
              <h4 className={'text-sm font-semibold pb-2'}>Meno</h4>
              <CustomInput
                value={user.firstName}
                label={''}
                name={'firstName'}
                placeholder={'Ján'}
                type={'text'}
                onChange={onInputChange}
                className={'border rounded  w-52 h-8 px-2'}
              />
              {error.firstName && <span className={'err'}>{error.firstName}</span>}
            </div>
            <div className={'ml-5'}>
              <h4 className={'text-sm font-semibold pb-2'}>Priezvisko</h4>
              <CustomInput
                value={user.lastName}
                label={''}
                name={'lastName'}
                placeholder={'Novák'}
                type={'text'}
                onChange={onInputChange}
                className={'border rounded w-52 h-8 px-2'}
              />
              {error.lastName && <span className={'err'}>{error.lastName}</span>}
            </div>
          </div>
          <div>
            <h4 className={'text-sm font-semibold pb-2 '}>Username</h4>
            <CustomInput
              value={user.userName}
              label={''}
              name={'userName'}
              placeholder={'Grontax'}
              type={'text'}
              onChange={onInputChange}
              className={'border rounded  w-52 h-8 px-2'}
            />
            {error.userName && <span className={'err'}>{error.userName}</span>}

          </div>

          <div>
            <h4 className={'text-sm font-semibold pb-2'}>Email</h4>
            <CustomInput
              value={user.email}
              label={''}
              name={'email'}
              placeholder={'example@gmail.com'}
              type={'email'}
              onChange={onInputChange}
              className={'border rounded  w-52 h-8 px-2'}
            />
            {error.email && <span className={'err'}>{error.email}</span>}

          </div>

          <div className={'flex'}>
            <div>
              <h4 className={'text-sm font-semibold pb-2'}>Heslo</h4>
              <CustomInput
                value={user.password}
                label={''}
                name={'password'}
                placeholder={'enter your password'}
                type={'password'}
                onChange={onInputChange}
                className={'border rounded  w-52 h-8 px-2'}
              />
              {error.password && <span className='err'>{error.password}</span>}
            </div>
            <div className={'ml-5'}>
              <h4 className={'text-sm font-semibold pb-2'}>Kontrola Hesla</h4>
              <CustomInput
                value={user.confirmPassword}
                label={''}
                name={'confirmPassword'}
                placeholder={'enter the same password'}
                type={'password'}
                onChange={onInputChange}
                className={'border rounded  w-52 h-8 px-2'}
              />
              {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
            </div>
          </div>

          <div>
            <h4 className={'text-sm font-semibold pb-2'}>Dátum narodenia</h4>
            <CustomInput
              value={user.birthDate}
              label={''}
              name={'birthDate'}
              placeholder={'enter your birthdate'}
              type={'date'}
              onChange={onInputChange}
              className={'border rounded  w-52 h-8 px-2'}
            />
            {error.birthDate && <span className={'err'}>{error.birthDate}</span>}

          </div>
          <div>
            <h4 className={'text-sm font-semibold pb-2'}>Číslo mobilu</h4>
            <CustomInput
              value={user.mobileNumber}
              label={''}
              name={'mobileNumber'}
              placeholder={'+421 xxx xxx xxx'}
              type={'tel'}
              onChange={onInputChange}
              className={'border rounded  w-52 h-8 px-2'}
            />
            {error.mobileNumber && <span className={'err'}>{error.mobileNumber}</span>}

          </div>
          <div>
            <h4 className={'text-sm font-semibold pb-2'}>Mesto pobytu</h4>
            <CustomInput
              value={user.city}
              label={''}
              name={'city'}
              placeholder={'type city you are living in'}
              type={'input'}
              onChange={onInputChange}
              className={'border rounded  w-52 h-8 px-2'}
            />
            {error.city && <span className={'err'}>{error.city}</span>}

          </div>
          <div className={'pt-5 '}>
            <button className={'primary-button large-button text-xl font-semibold'}>Register</button>

          </div>
        </div>
      </form>
    </div>
  )
}
