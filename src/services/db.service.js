import firebase from 'firebase/compat/app'
// Required for side-effects
import 'firebase/firestore'
import { firebaseConfig } from '../googleSigning/config'
import { initializeApp } from 'firebase/app'
import {
  collection,
  addDoc,
  getFirestore,
  getDoc,
  doc,
} from 'firebase/firestore'

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

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

// CRUD- get
export const getById = async (collectionName, id) => {
  try {
    console.log('ID:', id)
    const docRef = doc(db, collectionName, id)
    console.log('docRef:', docRef)
    console.log('collection name:', collectionName)
    const result = await getDoc(docRef)
    const data = result.data()
    console.log('item from firestore:', data)
  } catch (err) {
    console.error('Error adding document: ', err)
  }
}

const _getCollection = (collectionName) => {
  return collection(db, collectionName)
}
