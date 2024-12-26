import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import Spiner from '../Components/Spiner'
import AuthContext from '../Provider/AuthContext'

export default function PrivateRoutes({children}) {
    const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <Spiner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}
