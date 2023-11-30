import { IconButton, Tooltip } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
// import { downloadSound } from '/src/api/api.js'

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
  // const handleDownload = async () => {
  //   if (sound && sound.downloadUrl) {
  //     try {
  //       await downloadSound(sound)
  //       console.log('handleDownload function was triggered')
  //     } catch (error) {
  //       console.error('Error in downloading:', error)
  //     }
  //   } else {
  //     console.error('Download URL not found for sound')
  //   }
  // }

  return (
    <Tooltip title="Download Sound">
      <IconButton onClick={handleDownload}>
        <DownloadIcon color="action" sx={{ fontSize: 'large' }} />
      </IconButton>
    </Tooltip>
  )
}
export default DownloadSoundButton
