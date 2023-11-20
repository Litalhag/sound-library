import { IconButton, Tooltip, Button } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import { onRemoveSound } from '../../services/sound.service'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { SoundContext } from '../../context/SoundContext'

const RemoveSound = ({ sound }) => {
  const { user } = useContext(AuthContext)
  const { removeSound } = useContext(SoundContext)

  // Should we try this function somehow?
  // const handleRemove = () => {
  //   onRemoveSound(sound.id, user, removeSound)
  //   onRemove(sound.id)
  // }
  return (
    <Tooltip title="Delete Sound">
      <IconButton onClick={() => onRemoveSound(sound.id, user, removeSound)}>
        <RemoveCircleOutlineIcon color="action" sx={{ fontSize: 'medium' }} />
      </IconButton>
    </Tooltip>
  )
}
export default RemoveSound
