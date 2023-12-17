import 'firebase/firestore'
import { firebaseConfig } from '../googleSigning/config'
import { initializeApp } from 'firebase/app'
import {
  collection,
  addDoc,
  getFirestore,
  getDocs,
  getDoc,
  doc,
} from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app)

// CRUD- create
export const saveToDb = async (collectionName, data) => {
  try {
    // _x = local function, which doesn't work outside the module(this file)
    const collection = _getCollection(collectionName)
    const docRef = await addDoc(collection, data)
    console.log('Document written with ID: ', docRef.id)
  } catch (err) {
    console.error('Error adding document: ', err)
  }
}

const _getCollection = (collectionName) => {
  return collection(db, collectionName)
}

// CRUD- get
export const getById = async (collectionName, id) => {
  try {
    console.log('db.service: ID:', id)
    const docRef = doc(db, collectionName, id)
    console.log('db.service: docRef:', docRef)
    console.log('db.service: collection name:', collectionName)
    const results = await getDocs(_getCollection(collectionName))
    const data = results.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }))
    console.log('db.service: results from getById:', data)
    return data.find((doc) => doc.id === id)
  } catch (err) {
    console.error('Error adding document: ', err)
  }
}

// This function retrieves the array of saved sound IDs from the user's document in Firestore.
export const fetchUserSavedSoundIdsFromFirestore = async (userId) => {
  try {
    const userDocRef = doc(db, 'user', userId) // Replace 'users' with your actual users collection name
    const userDoc = await getDoc(userDocRef)

    if (userDoc.exists()) {
      const userData = userDoc.data()
      return userData.savedSounds || [] // Assuming 'savedSounds' is the field name
    } else {
      console.log('No such user document!')
      return []
    }
  } catch (error) {
    console.error('Error fetching user saved sounds: ', error)
    throw error // Re-throw the error to be handled by the caller
  }
}

// In db.service.js, add fetchSoundDetailsById function
export const fetchSoundDetailsById = async (soundId) => {
  if (typeof soundId !== 'string') {
    throw new Error(
      `Invalid soundId type: ${typeof soundId}. Must be a string.`
    )
  }
  // Replace 'sounds' with your actual sounds collection name
  const soundRef = doc(db, 'sounds', soundId)
  const soundDoc = await getDoc(soundRef)
  if (soundDoc.exists()) {
    return { id: soundDoc.id, ...soundDoc.data() }
  } else {
    console.log(`No such sound with ID: ${soundId}`)
    return null
  }
}
