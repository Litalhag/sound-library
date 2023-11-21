import React from 'react'
import { Box, Typography, useTheme, Container } from '@mui/material'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

const About = () => {
  const theme = useTheme()

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
        <Typography
          variant="body1"
          sx={{
            marginBottom: '10px',
            fontStyle: 'italic',
            color: '#96a5de',
            fontWeight: 500,
            fontSize: '17px',
          }}
        >
          Your ultimate destination for exploring, discovering, and utilizing a
          diverse world of sounds.
        </Typography>
        <Typography variant="body1" sx={{ mb: '10px' }}>
          At Sound Library, we believe that every sound tells a story and holds
          the potential to inspire creativity. Our platform is dedicated to
          audio enthusiasts, creators, and anyone curious about the vast
          universe of sounds.
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          Our extensive library features over 100 meticulously curated sounds,
          each sound in our collection is more than just a file - it&apos;s an
          experience, an inspiration, a spark for creativity.
        </Typography>
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
        >
          Built for Creators
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          Whether you&apos;re a musician, a video editor, a content creator, or
          just an audiophile, Sound Library provides an intuitive and
          resourceful environment. Enhance your projects with the perfect
          sounds, explore new audio landscapes, or simply find inspiration in
          our eclectic collection.
        </Typography>
        <Typography
          variant="h6"
          component="h3"
          sx={{ fontWeight: 'bold', mb: '10px' }}
        >
          Join Our Community
        </Typography>
        <Typography variant="body1" sx={{ mb: '20px' }}>
          At Sound Library, we&apos;re more than a website - we&apos;re a
          community of sound lovers. Join us and embark on a journey through the
          world of audio.
        </Typography>
        <Typography
          variant="h6"
          sx={{ fontWeight: '700', fontStyle: 'italic' }}
        >
          Welcome to Sound Library - where every sound matters.
        </Typography>
      </Container>
    </Box>
  )
}

export default About
