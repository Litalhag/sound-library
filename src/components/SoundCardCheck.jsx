import React from 'react'
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Button,
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'

const SoundCardCheck = ({ sound }) => {
  const saveSound = (soundId) => {
    console.log(soundId)
  }

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginBottom: 2,
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {sound.name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            {sound.description}
          </Typography>
          {/* Tags */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              marginTop: 2,
            }}
          >
            {sound.tags.map((tag) => (
              <Typography
                key={tag}
                sx={{
                  marginRight: 1,
                  marginBottom: 1,
                  backgroundColor: '#f0f0f0',
                  borderRadius: 1,
                  padding: '2px 6px',
                }}
              >
                {tag}
              </Typography>
            ))}
          </Box>
          <Typography variant="body2" color="text.secondary">
            Type: {sound.type}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Created: {sound.created}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Duration: {sound.duration}
          </Typography>

          {/* Image and audio */}
          <CardMedia
            component="img"
            sx={{ width: 151, objectFit: 'cover' }}
            image={sound.imageUrl}
            alt={`Waveform for ${sound.name}`}
          />
          <audio controls style={{ marginTop: '10px' }}>
            <source src={sound.previewSound} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </CardContent>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 1,
            paddingBottom: 1,
            flexDirection: 'raw',
          }}
        >
          <Button variant="outlined" onClick={() => saveSound(sound.id)}>
            Save Sound
          </Button>
          <a
            title="Download link"
            href={sound.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <IconButton aria-label="download">
              <DownloadIcon />
            </IconButton>
          </a>
        </Box>
      </Box>
    </Card>
  )
}

export default SoundCardCheck
