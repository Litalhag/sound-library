import { createContext, useState } from 'react'
import { auth, provider } from '../googleSigning/config'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getById } from '../services/db.service'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const saveUserToLocalStorage = (user) => {
    console.log(user)
    localStorage.setItem(
      'user',
      JSON.stringify({
        ...user,
        apiKey: null,
        id: 'gYZPtxQJbnK89w2v4N6Q',
      })
    )
  }

  const loadUserToLocalStorage = () => {
    const stringUser = localStorage.getItem('user')
    if (!stringUser) return null
    const user = JSON.parse(stringUser)
    setUser(user)
    return user
  }

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log(result)
      // gives you a Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // signed-in user info
      const user = result.user
      const userFromDb = await getById('user', user.id)
      saveUserToLocalStorage(user)
      console.log(user)
      setUser(user)
    } catch (error) {
      console.log(error)
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.log(credential)
    }
  }

  const logout = () => {
    localStorage.removeItem('userData')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loadUserToLocalStorage,
        saveUserToLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
