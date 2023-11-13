import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const SignIn = () => {
  const { login } = useContext(AuthContext)

  return (
    <div>
      <button onClick={login}>Sign In with Google</button>
    </div>
  )
}
export default SignIn
