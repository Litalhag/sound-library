import {
  doc,
  updateDoc,
  arrayUnion,
  setDoc,
  getDoc,
  arrayRemove,
} from 'firebase/firestore'
import { db } from './db.service'
import { getSoundById } from '../api/api'

// These functions (addSound & 'removeSound) should not only update Firestore but also
// call addSound or removeSound from SoundContext to update the local state.

export const saveSound = async (soundId, uid) => {
  if (!uid) {
    console.log('User must be logged in to save sounds')
    return
  }
  const soundIdStr = soundId.toString()
  // Fetch the full sound data using the sound ID
  const sound = await getSoundById(soundIdStr)
  if (!sound) {
    console.error(`Failed to fetch sound data for sound ID ${soundIdStr}`)
    return
  }

  // Check if user document exists, create if it doesn't
  const userDocRef = doc(db, 'user', uid)
  const userDoc = await getDoc(userDocRef)
  if (!userDoc.exists()) {
    // Initialize with empty array
    await setDoc(userDocRef, { savedSounds: [] })
  }

  // Save sound id to user's document in Firestore
  await updateSavedSoundsInFirestore(uid, soundIdStr)

  // Update local state with the full sound data
  // addSoundCallback(sound)

  console.log(
    `sound.service saveSound: Sound with id ${soundIdStr} saved for user ${uid}`
  )
}

// updating the firestore savedSounds array:
export const updateSavedSoundsInFirestore = async (userId, soundId) => {
  // replacing 'users' with the actual users collection name
  const userDocRef = doc(db, 'user', userId)
  try {
    console.log(
      `sound.service: Updating saved sounds in Firestore for user ${userId} with sound ID ${soundId}`
    )
    await updateDoc(userDocRef, {
      // adding sound id to savedSounds array
      savedSounds: arrayUnion(soundId),
    })
    console.log(`Sound ID ${soundId} added to user ${userId}`)
  } catch (error) {
    console.error('Error updating saved sounds in Firestore: ', error)
    throw error
  }
}

export const fetchUserSavedSounds = async (soundIds) => {
  try {
    const soundDetailsPromises = soundIds.map((soundId) => {
      console.log('Fetching details for sound ID:', soundId)
      return getSoundById(soundId)
    })
    const soundDetails = await Promise.all(soundDetailsPromises)
    return soundDetails.filter((sound) => sound !== null)
  } catch (err) {
    console.error('Error fetching user saved sounds:', err)
    return []
  }
}

export const onRemoveSound = async (
  soundId,
  user,
  removeSound,
  removeUserSavedSound
) => {
  if (!user) {
    console.log('User must be logged in to remove sounds')
    return
  }
  const soundIdStr = soundId.toString()
  removeSound(soundIdStr) //updates local state

  const userDocRef = doc(db, 'user', user.uid)
  await updateUserRemovedSoundsInFirestore(user.uid, soundIdStr) //updates firestore
  removeUserSavedSound(soundId)
  console.log(`Sound with id ${soundId} removed for user ${user.uid}`)
}

export const updateUserRemovedSoundsInFirestore = async (userId, soundId) => {
  const userDocRef = doc(db, 'user', userId)
  try {
    await updateDoc(userDocRef, {
      savedSounds: arrayRemove(soundId),
    })
    console.log(`Sound ID ${soundId} removed to user ${userId}`)
  } catch (error) {
    console.error('Error updating saved sounds in Firestore: ', error)
    throw error
  }
}
//--------------------------------------------------------------

// export const updateSavedSoundsInFirestore = async (
//   userId,
//   soundId,
//   action
// ) => {
//   const userDocRef = doc(db, 'user', userId)
//   try {
//     if (action === 'add') {
//       await updateDoc(userDocRef, {
//         savedSounds: arrayUnion(soundId),
//       })
//       console.log(`Sound ID ${soundId} added to user ${userId}`)
//     } else if (action === 'remove') {
//       await updateDoc(userDocRef, { savedSounds: arrayRemove(soundId) })
//       console.log(`Sound ID ${soundId} removed from user ${userId}`)
//     }
//   } catch (error) {
//     console.error('Error updating saved sounds in Firestore: ', error)
//     throw error
//   }
// }
