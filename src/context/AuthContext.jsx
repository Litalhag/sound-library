import { createContext, useState } from 'react'
import { auth, provider } from '../googleSigning/config'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
// import { getById, db } from '../services/db.service'
import { getById } from '../services/db.service'
import { db } from '../services/db.service'
import { doc, setDoc } from 'firebase/firestore'

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
      // gives a Google Access Token
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      // signed-in user info
      const googleUser = result?.user
      // Check if user exists in Firestore
      let userFromDb = await getById('user', googleUser.uid)
      if (!userFromDb) {
        // if user doesn't exist, create a new user in Firestore
        const newUser = {
          // need to check=firebase.firestore.FieldValue.serverTimestamp() if using Firebase v8
          createdAt: new Date(),
          displayName: googleUser.displayName,
          email: googleUser.email,
          photoURL: googleUser.photoURL,
          savedSounds: [],
          uid: googleUser.uid,
        }
        console.log(newUser)
        await setDoc(doc(db, 'user', googleUser.uid), newUser)
        userFromDb = newUser
      } else {
        const updatedUser = {
          ...userFromDb,
          displayName: googleUser.displayName,
          email: googleUser.email,
          photoURL: googleUser.photoURL,
          savedSounds: userFromDb.savedSounds || [],
          uid: googleUser.uid,
        }
        await setDoc(doc(db, 'user', googleUser.uid), updatedUser)
        userFromDb = updatedUser
      }

      // Update user in local state and local storage
      setUser(userFromDb)
      saveUserToLocalStorage(userFromDb) // Update this function to handle the new user object structure
      console.log('Google User From Login:', googleUser)
    } catch (error) {
      console.log(error)
      const errorCode = error.code
      const errorMessage = error.message
      // The email of the user's account used.
      const email = error.customData.email
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error)
      console.log('credential:', credential)
    }
  }

  // const logout = () => {
  //   localStorage.removeItem('user')
  //   setUser(null)
  // }

  const logout = async () => {
    try {
      await signOut(auth)
      localStorage.removeItem('user') // Make sure this matches your local storage key
      setUser(null)
    } catch (error) {
      console.error('Error logging out: ', error)
    }
  }
  //update the user's saved sounds, called after updating the Firestore
  const updateUserSavedSounds = async (soundId) => {
    console.log(
      'user context updateUserSavedSounds: Called updateUserSavedSounds with soundId: ',
      soundId
    )
    const updatedUser = { ...user, savedSounds: [...user.savedSounds, soundId] }
    console.log(
      'user context updateUserSavedSounds:user context: Updating user saved sounds with sound ID: ',
      soundId
    )
    console.log(
      'user context updateUserSavedSounds: user context: Updated user object: ',
      updatedUser
    )
    setUser(updatedUser)
    // save to local storage
    saveUserToLocalStorage(updatedUser)
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        loadUserFromLocalStorage,
        saveUserToLocalStorage,
        updateUserSavedSounds,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
