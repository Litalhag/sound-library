import { IconButton, Tooltip, Button } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { onRemoveSound } from '../../services/sound.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const RemoveSound = ({ sound, removeSound, removeUserSavedSound }) => {
  const { user } = useContext(AuthContext)

  const handleRemoveSound = () => {
    onRemoveSound(sound.id, user, removeSound, removeUserSavedSound)
  }

  return (
    <Tooltip title="Remove Sound">
      <IconButton onClick={handleRemoveSound}>
        <RemoveCircleOutlineIcon color="action" sx={{ fontSize: 'medium' }} />
      </IconButton>
    </Tooltip>
  )
}
export default RemoveSound
