import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '../Provider/AuthProvider'
import Spiner from '../Components/Spiner'

export default function PrivateRoutes({children}) {
    const { user, loading } = useContext(AuthContext)

  const location = useLocation()

  if (loading) return <Spiner />
  if (user) return children
  return <Navigate to='/login' state={location.pathname} />
}
