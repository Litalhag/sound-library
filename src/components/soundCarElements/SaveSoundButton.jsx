import { IconButton, Tooltip } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useContext } from 'react'
import { SoundContext } from '../../context/SoundContext'
import { AuthContext } from '../../context/AuthContext'

const SaveSoundButton = ({ sound }) => {
  const { addSound } = useContext(SoundContext)
  const { updateUserSavedSounds } = useContext(AuthContext) //added updateUserSavedSounds function from AuthContext

  const handleAddSound = async () => {
    await addSound(sound)
    updateUserSavedSounds(sound.id) // Call this after updating Firestore
  }

  return (
    <Tooltip title="Save Sound">
      {/* <IconButton onClick={() => addSound(sound)}> */}
      {/* changed onClick to handleAddSound */}
      <IconButton onClick={handleAddSound}>
        <AddCircleOutlineIcon color="action" sx={{ fontSize: 'medium' }} />
      </IconButton>
    </Tooltip>
  )
}
export default SaveSoundButton
