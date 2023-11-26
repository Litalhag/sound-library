import React from 'react'
import { Box, Typography, Container } from '@mui/material'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import AboutFeatures from './AboutFeatures'
import AboutIntro from './AboutIntro'
import AboutOuter from './AboutOuter'

const About = () => {
  const backgroundImage = '/src/assets/sound2.jpg'

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '90vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pt: { xs: 10, sm: 12 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        '&::before': {
          content: '""',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          zIndex: 1,
        },
      }}
    >
      <Container
        sx={{
          position: 'relative',
          zIndex: 2,
          color: '#fff',
          textAlign: 'left',
          padding: '20px',
          maxWidth: 'md',
        }}
      >
        <Box
          sx={{ display: 'flex', alignContent: 'center', flexWrap: ' wrap' }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{
              fontWeight: 'bold',
              mb: '10px',
              fontSize: { xs: '1.2rem', sm: '1.5rem' },
            }}
          >
            Welcome to
          </Typography>
          <GraphicEqIcon
            sx={{
              ml: 1,
              mr: 1,
              mt: { xs: 0, sm: 0.5 },
              mb: 0,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              fontSize: { xs: '1rem', sm: '1.25rem' },
            }}
          >
            Sound Library
          </Typography>
        </Box>
        <AboutIntro />
        <AboutFeatures />
        <AboutOuter />
      </Container>
    </Box>
  )
}

export default About
