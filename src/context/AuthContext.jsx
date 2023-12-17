import { createContext, useState } from 'react'
import { auth, provider } from '../googleSigning/config'
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth'
import { getById } from '../services/db.service'
import { db } from '../services/db.service'
import { doc, setDoc } from 'firebase/firestore'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  // anything which doesn't use state to move to utils - both functions - localStorage
  const loadUserFromLocalStorage = () => {
    const stringUser = localStorage.getItem('user')
    if (!stringUser) return null
    const user = JSON.parse(stringUser)
    return user
  }

  const [user, setUser] = useState(loadUserFromLocalStorage)

  const saveUserToLocalStorage = (user) => {
    console.log('user from save user from local storage', user)
    // if there's no user - don't save to local storage
    if (!user) return
    localStorage.setItem(
      'user',
      JSON.stringify({
        // to check these lines
        ...user,
        apiKey: null,
        id: 'gYZPtxQJbnK89w2v4N6Q',
      })
    )
  }

  async function login() {
    setLoading(true)
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
    setLoading(false)
  }

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
      'user context updateUserSavedSounds:Called updateUserSavedSounds with soundId: ',
      soundId
    )
    const soundIdStr = soundId.toString()
    const updatedUser = {
      ...user,
      savedSounds: [...user.savedSounds, soundIdStr],
    }
    console.log(
      'user context updateUserSavedSounds:Updating user saved sounds with sound ID:',
      soundIdStr
    )
    setUser(updatedUser) // to take both of set states and create a function named save user
    // save to local storage
    saveUserToLocalStorage(updatedUser)
  }

  const removeUserSavedSound = async (soundId) => {
    console.log('Removing sound ID from user saved sounds:', soundId)
    const updatedUser = {
      ...user,
      savedSounds: user.savedSounds.filter((id) => id !== soundId),
    }
    console.log('Updated User after removal:', updatedUser)
    setUser((prevUser) => ({ ...prevUser, ...updatedUser }))
    saveUserToLocalStorage(updatedUser)
  }
  // const userDocRef = doc(db, 'user', user.uid)
  // await updateDoc(userDocRef, {
  //   savedSounds: arrayUnion(soundId),
  // })

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        loadUserFromLocalStorage,
        saveUserToLocalStorage,
        updateUserSavedSounds,
        removeUserSavedSound,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
