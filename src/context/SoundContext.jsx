import { createContext, useState, useEffect, useContext } from 'react'

import { getAllSounds, getSoundById } from '../api/api'
import { saveSound } from '../services/sound.service'
import { AuthContext } from './AuthContext'

export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
  const { user, updateUserSavedSounds } = useContext(AuthContext)
  const [sounds, setSounds] = useState([])
  const [savedSounds, setSavedSounds] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchSound = async () => {
    try {
      const soundData = await getAllSounds()
      // console.log(soundData)
      setSounds(soundData)
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSound()
  }, [])

  // i need to ensure these functions are properly called when a sound is saved or removed.
  // This will update the savedSounds state, causing any component that uses this state to re-render with the new data.

  const addSound = async (sound) => {
    // Check if the sound is already saved
    const isAlreadySaved = user.savedSounds.includes(sound.id)
    if (isAlreadySaved) {
      // Maybe show a notification or handle this scenario
      return
    }
    console.log('sound context: Attempting to add sound with ID: ', sound.id)

    try {
      // Save the sound ID to Firestore
      await saveSound(sound.id, user.uid)

      // Fetch detailed information for the sound
      const detailedSound = await getSoundById(sound.id)

      // Update the savedSounds state with the detailed sound information
      setSavedSounds((prevSavedSounds) => [...prevSavedSounds, detailedSound])

      // calling updateUserSavedSounds from user context:
      updateUserSavedSounds(sound.id)
      console.log('sound context: Sound added successfully: ', detailedSound)
    } catch (error) {
      console.error('Error updating saved sounds: ', error)
      throw error
    }
  }

  // update the 'savedSound' state
  const removeSound = (soundId) => {
    const soundIdStr = soundId.toString()
    setSavedSounds((prevSounds) => {
      const newSavedSounds = prevSounds.filter(
        (sound) => sound.id !== soundIdStr
      )
      console.log('Updated savedSounds:', newSavedSounds)
      return newSavedSounds
    })
  }

  const clearError = () => {
    setError(null)
  }
  // const downloadSound = (soundId) => {
  //   const downloadUrl = getDownloadUrl(soundId)
  //   if (!downloadUrl) {
  //     console.error('Download URL not found for sound ID:', soundId)
  //     return
  //   }

  //   // Here you can either return the URL or directly trigger the download in the browser
  //   window.open(downloadUrl, '_blank')
  // }

  // const addNewShoe = async (shoe) => {
  //   try {
  //     const newShoe = await addShoe(shoe)
  //     setShoes((prevShoes) => [...prevShoes, newShoe])
  //     showToast('Shoe added successfully')
  //   } catch (err) {
  //     setError(err.message)
  //   }
  //}

  // const editShoe = async (shoeData) => {
  //   try {
  //     const updatedShoe = await updateShoe(shoeData, shoeData.id)
  //     setShoes((prevShoes) =>
  //       prevShoes.map((shoe) => (shoe.id === shoeData.id ? updatedShoe : shoe))
  //     )
  //     showToast('Shoe updated successfully')
  //   } catch (err) {
  //     setError(err.message)
  //   }
  // }

  // const removeShoe = async (id) => {
  //   try {
  //     await deleteShoe(id)
  //     setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.id !== id))
  //     showToast('Shoe deleted successfully')
  //   } catch (err) {
  //     setError(err.message)
  //   }
  // }

  return (
    <SoundContext.Provider
      value={{
        sounds,
        savedSounds,
        addSound,
        removeSound,
        setSavedSounds,
        fetchSound,
        isLoading,
        error,
        clearError,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}

// const showToast = (message) => {
//   toast.success(message, {
//     position: 'top-center',
//     autoClose: 5000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: false,
//     progress: undefined,
//   })
// }
