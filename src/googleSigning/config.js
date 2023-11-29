import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const apiKey = import.meta.env.VITE_FIREBASE_API_KEY

export const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey,
  authDomain: 'sound-library-abb03.firebaseapp.com',
  projectId: 'sound-library-abb03',
  storageBucket: 'sound-library-abb03.appspot.com',
  messagingSenderId: '780195174541',
  appId: '1:780195174541:web:d7d757dbf73cbf36be6ac4',
  measurementId: 'G-X17BX33WEX',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)

const provider = new GoogleAuthProvider()
const auth = getAuth()

export { auth, provider }
