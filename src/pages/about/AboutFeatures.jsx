import React from 'react'
import { Box, Typography, useTheme, Container } from '@mui/material'

const AboutFeatures = () => {
  return (
    <>
      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: 'bold', mb: '10px' }}
      >
        Sound Library is an interactive platform where you can:
      </Typography>
      <Typography variant="h6" component="h6" sx={{ fontWeight: '700' }}>
        Preview Sounds:
      </Typography>
      <Typography variant="body1" sx={{ mb: '20px' }}>
        Before you decide, listen to each sound with our built-in player.
        Experience the quality and range of audio we offer.
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: '700', mt: '20px' }}
        >
          Save Favorites:
        </Typography>
        Found a sound that resonates with you? Save it to your personal
        dashboard for easy access anytime.
        <Typography
          variant="h6"
          component="h6"
          sx={{ fontWeight: '700', mt: '20px' }}
        >
          Download with Ease:
        </Typography>
        Whether for your next creative project or personal collection, our
        sounds are available for download at the click of a button.
      </Typography>
      <Typography
        variant="h6"
        component="h3"
        sx={{ fontWeight: 'bold', mb: '10px' }}
      ></Typography>
    </>
  )
}
export default AboutFeatures
