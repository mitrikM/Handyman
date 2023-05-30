import React, { useEffect, useState } from 'react'
import { Navigate, Outlet, useOutletContext } from 'react-router'
import { api } from '../API'
const  PrivateRoutes = () => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [user,setUser]=useState([])
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await api.get('/auth/verify-token');
        if (response.status === 200) {
          setAuth(response.data.isAuthenticated);
          setUser(response.data.user)
        } else {
          setAuth(false);
        }
      } catch (error) {
        console.error('Error checking authentication:', error);
        setAuth(false);
      } finally {
        setLoading(false);
      }
    };
    checkAuthentication();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    auth ? <Outlet context={[user]}/> : <Navigate to="/login" />
)
};
export default PrivateRoutes;
