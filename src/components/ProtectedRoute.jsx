import { useContext, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const ProtectedRoute = ({ children }) => {
  const { user } = useContext(AuthContext)
  const navigate = useNavigate()
  if (!user) {
    // Redirect to home page or login page if not authenticated
    return <Navigate to="/" />
  }

  return children
}

/* 
useEffect(() => {
    if (!user || !user.isAdmin) {
      navigate('/')
    }
  }, [navigate, user])

  return children
}*/
