import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { api } from '../../API'
import { useNavigate } from 'react-router-dom'
import arrowDown from '../../assets/down-arrow.png'
export const NavbarLoggedIn = (user: any) => {

  const navigate = useNavigate()
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  const handleLogOut = async () => {
    await api.post('/auth/logout')

    navigate('/')
  }

  return (
    <nav className='bg-gray-50'>
      <div className='max-w-7xl mx-auto pt-2 pb-1'>
        <div className='flex justify-between'>
          <div className='flex items-center space-x-10'>
            <div className={'flex items-center space-x-2 cursor-pointer'} onClick={()=>{navigate('/home')}}>
              <img src={logo} alt={'logo'} width={'60px'} height={'60px'} />
              <h4 className='text-lg'>Handyman</h4>
            </div>
            <button
              className={'primary-button large-button'}
              onClick={() => {
                navigate('/new-contract')
              }}
            >
              Pridať zákazku
            </button>

            <a href='#' className='text-base hover:text-blue-600'>
              Kategorie
            </a>
            <a href='/contracts' className='text-base hover:text-blue-600'>
              Zakazky
            </a>
            <a href='/MyContracts' className='text-base hover:text-blue-600'>
              Moje zákazky
            </a>
            <a href='#' className='text-base hover:text-blue-600'>
              Moje ponuky
            </a>
          </div>
          <div className='flex items-center space-x-10'>
            <a href='#' className='text-base hover:text-blue-600'>
              Podpora
            </a>

            <div className='relative inline-block text-left'>
              <button
                onClick={toggleDropdown}
                className='text-base hover:text-blue-600 focus:outline-none'
              >
                {user.user && user.user.firstName} <img className={'inline'} src={arrowDown} />
              </button>
              {dropdownOpen && (
                <div className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'>
                  <div
                    className='py-1'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='options-menu'
                  >
                    <a
                      href='#'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      role='menuitem'
                    >
                      Profil
                    </a>
                    <div
                      onClick={handleLogOut}
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer'
                      role='menuitem'
                    >
                      Odhlásiť sa
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
