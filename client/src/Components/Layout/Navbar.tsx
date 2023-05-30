import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { useNavigate } from 'react-router-dom'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  return (
    <nav className=' bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <div className='flex items-center space-x-2 cursor-pointer' onClick={()=>{navigate('/')}}>
              <img
                src={logo}
                alt='logo'
                width='60px'
                height='60px'
                className='block lg:hidden h-10 w-auto'
              />
              <img
                src={logo}
                alt='logo'
                width='60px'
                height='60px'
                className='hidden lg:block h-10 w-auto'
              />
              <h4 className='text-lg'>Handyman</h4>
            </div>
            <div className='hidden sm:flex sm:ml-6 sm:space-x-4 my-auto'>
              <a href='#' className=''>
                Kategórie
              </a>
              <a href='#' className=''>
                Zákazky
              </a>
              <a href='#' className=''>
                Ako fungujeme
              </a>
            </div>
          </div>
          <div className='hidden  sm:flex sm:items-center sm:ml-6 sm:space-x-4'>
            <a href='/Login' className=''>
              Prihlásenie
            </a>
            <a href='/Register' className=''>
              Registrovať sa
            </a>
            <button className='large-button secondary-button'>Staň sa handymanom</button>
          </div>
          <div className='-mr-2 flex sm:hidden'>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className='inline-flex items-center justify-center p-2 rounded-md focus:outline-none'
            >
              <svg
                className='block h-6 w-6'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                aria-hidden='true'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${!isOpen ? 'hidden' : 'block'} sm:hidden`}>
        <div className='px-2 pt-2 pb-3 space-y-1 flex flex-col'>
          <a href='#' className=''>
            Kategórie
          </a>
          <a href='#' className=''>
            Zákazky
          </a>
          <a href='#' className=''>
            Ako fungujeme
          </a>
        </div>
        <div className='pt-4 pb-3 border-t border-gray-200'>
          <a href='/Login' className='block px-4'>
            Prihlásenie
          </a>
          <a href='/Register' className='block px-4'>
            Registrovať sa
          </a>
          <button className='large-button secondary-button w-full mt-4'>Staň sa handymanom</button>
        </div>
      </div>
    </nav>
  )
}
