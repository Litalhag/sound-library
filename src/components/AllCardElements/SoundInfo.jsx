import { Typography, Box } from '@mui/material'

export const SoundInfo = (sound) => {
  return (
    <Box>
      {/* sx={{ [theme.breakpoints.down('sm')]: { display: 'none' } }} */}
      <Typography variant="body2" color="text.secondary">
        Type: {sound.type}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Created: {sound.created}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Duration: {sound.duration}
      </Typography>
    </Box>
  )
}
