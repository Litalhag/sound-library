import { IconButton, Tooltip } from '@mui/material'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { useContext } from 'react'
import { SoundContext } from '../../context/SoundContext'

const SaveSound = ({ sound }) => {
  const { addSound } = useContext(SoundContext)
  return (
    <Tooltip title="Save Sound">
      <IconButton onClick={() => addSound(sound)}>
        <AddCircleOutlineIcon color="action" sx={{ fontSize: 'medium' }} />
      </IconButton>
    </Tooltip>
  )
}
export default SaveSound
