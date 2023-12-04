import { IconButton, Tooltip } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

const DownloadSoundButton = ({ sound }) => {
  console.log('DownloadSoundButton sound prop:', sound.id)

  const handleDownload = () => {
    if (sound && sound.downloadUrl) {
      window.open(sound.downloadUrl, '_blank')
      console.log('handleDownload function was triggered')
    } else {
      console.error('Download URL not found for sound')
    }
  }

  return (
    <Tooltip title="Download Sound">
      <IconButton onClick={handleDownload}>
        <DownloadIcon color="action" sx={{ fontSize: 'large' }} />
      </IconButton>
    </Tooltip>
  )
}
export default DownloadSoundButton
