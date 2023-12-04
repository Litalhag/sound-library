import { createContext, useState, useEffect, useContext } from 'react'

import { getAllSounds, getSoundById } from '../api/api'
import { saveSound } from '../services/sound.service'
import { AuthContext } from './AuthContext'
import { ErrorContext } from './ErrorContext'

export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
  const { user, updateUserSavedSounds } = useContext(AuthContext)
  const [sounds, setSounds] = useState([])
  const [savedSounds, setSavedSounds] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { error, setError } = useContext(ErrorContext)

  const fetchSound = async () => {
    try {
      // throw new Error('Simulated error')
      const soundData = await getAllSounds()
      console.log(soundData)
      setSounds(soundData)
      setIsLoading(false)
    } catch (err) {
      console.log('Error:', err)
      setError(err)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSound()
  }, [])

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
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}
