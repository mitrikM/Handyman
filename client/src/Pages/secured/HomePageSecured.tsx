import { NavbarLoggedIn } from '../../Components/LoggedInLayout/NavbarLoggedIn'
import { useEffect } from 'react'
import { api } from '../../API'
import { useOutletContext } from 'react-router'

export const HomePageSecured = () => {

  const [user] = useOutletContext()
  return (
    <div>
      <NavbarLoggedIn user={user} />
      <div className={'min-h-screen white-color'}>

      </div>
    </div>
  )
}
