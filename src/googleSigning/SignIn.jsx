import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
// import { auth, provider } from './config'
// import { signInWithPopup } from 'firebase/auth'
import Home from '../pages/Home'

const SignIn = () => {
  const { user, login } = useContext(AuthContext)

  return (
    <div>
      {user ? <Home /> : <button onClick={login}>Sign In with Google</button>}
    </div>
  )
}
export default SignIn
