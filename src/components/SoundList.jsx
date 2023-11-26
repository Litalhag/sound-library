import { useContext } from 'react'
import { ErrorContext } from '../context/ErrorContext'
import SoundCard from './SoundCard'
import { SoundContext } from '../context/SoundContext'
import { AuthContext } from '../context/AuthContext'
import { Alert, AlertTitle, Button } from '@mui/material'
import Error from './Error'

const SoundList = ({ sounds }) => {
  const { removeSound, fetchSound } = useContext(SoundContext)
  const { error, clearError } = useContext(ErrorContext)
  const { user } = useContext(AuthContext)

  return (
    <div id="soundList">
      {sounds.map((sound) => {
        const isSoundSaved = user?.savedSounds.includes(sound.id.toString())

        return (
          <SoundCard
            key={sound.id}
            sound={sound}
            isSoundSaved={isSoundSaved}
            removeSound={removeSound}
          />
        )
      })}
    </div>
  )
}
export default SoundList
