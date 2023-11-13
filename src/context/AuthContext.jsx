import { createContext, useState } from 'react'
import { auth, provider } from '../googleSigning/config'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getById } from '../services/db.service'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const saveUserToLocalStorage = (user) => {
    console.log('user from save user from local storage', user)
    // if there's no user - don't save to local storage
    if (!user) return
    localStorage.setItem(
      'user',
      JSON.stringify({
        ...user,
        apiKey: null,
        id: 'gYZPtxQJbnK89w2v4N6Q',
      })
    )
  }

  const loadUserFromLocalStorage = () => {
    const stringUser = localStorage.getItem('user')
    if (!stringUser) return null
    const user = JSON.parse(stringUser)
    return user
  }

  async function login() {
    try {
      const result = await signInWithPopup(auth, provider)
      console.log('Result:', result)
      // gives you a Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // signed-in user info
      const user = result?.user
      const userFromLocalStorage = loadUserFromLocalStorage()
      console.log('user from auth context:', user)

      const userFromDb = await getById('user', userFromLocalStorage.id)
      console.log('userFromDb:', userFromDb)
      saveUserToLocalStorage(userFromDb)
      console.log('Google User From Login:', user)
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
      console.log('credential:', credential)
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
        loadUserFromLocalStorage,
        saveUserToLocalStorage,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
