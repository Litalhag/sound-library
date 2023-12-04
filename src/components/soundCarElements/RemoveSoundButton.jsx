import { IconButton, Tooltip, Button } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { onRemoveSound } from '../../services/sound.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const RemoveSoundButton = ({ sound, removeSound }) => {
  const { user, removeUserSavedSound } = useContext(AuthContext)

  const handleRemoveSound = async () => {
    await onRemoveSound(sound.id, user, removeSound, removeUserSavedSound)
    removeUserSavedSound(sound.id.toString()) // Calling after updating Firestore
  }

  return (
    <Tooltip title="Remove Sound">
      <IconButton onClick={handleRemoveSound}>
        <RemoveCircleOutlineIcon color="action" sx={{ fontSize: 'medium' }} />
      </IconButton>
    </Tooltip>
  )
}
export default RemoveSoundButton
