import React from 'react'
import { Box, Grid, Typography } from '@mui/material'

const About = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        pt: { xs: '56px', sm: '64px' },
        mt: { xs: '56px', sm: '64px' },
        height: { xs: `calc(100vh - 56px)`, sm: `calc(100vh - 64px)` },
      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
        alt="Sound Library"
        src="/src/assets/sound14.jpg"
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: '1rem', md: '3rem' },
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            color: '#fff',
            overflowY: 'auto',
          }}
        >
          <Typography
            variant="h5"
            component="h2"
            sx={{ fontWeight: 'bold', marginBottom: '10px' }}
          >
            Welcome to Sound Library
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginBottom: '10px', fontStyle: 'italic', color: '#96a5de' }}
          >
            Your ultimate destination for exploring, discovering, and utilizing
            a diverse world of sounds.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            At Sound Library, we believe that every sound tells a story and
            holds the potential to inspire creativity. Our platform is dedicated
            to audio enthusiasts, creators, and anyone curious about the vast
            universe of sounds.
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Our extensive library features over 100 meticulously curated sounds,
            ranging from the subtle whispers of nature to the vibrant beats of
            urban life. Each sound in our collection is more than just a file -
            it&apos;s an experience, an inspiration, a spark for creativity.
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 'bold', marginBottom: '10px' }}
          >
            Preview, Save, and Utilize
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Sound Library is an interactive platform where you can:
            <br />
            <strong>Preview Sounds:</strong> <br />
            Before you decide, listen to each sound with our built-in player.
            Experience the quality and range of audio we offer.
            <br />
            <strong>Save Favorites:</strong> <br />
            Found a sound that resonates with you? <br />
            Save it to your personal dashboard for easy access anytime.
            <br />
            <strong>Download with Ease:</strong> <br />
            Whether for your next creative project or personal collection, our
            sounds are available for download at the click of a button.
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 'bold', marginBottom: '10px' }}
          >
            Built for Creators
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            Whether you&apos;re a musician, a video editor, a content creator,
            or just an audiophile, Sound Library provides an intuitive and
            resourceful environment. Enhance your projects with the perfect
            sounds, explore new audio landscapes, or simply find inspiration in
            our eclectic collection.
          </Typography>
          <Typography
            variant="h6"
            component="h3"
            sx={{ fontWeight: 'bold', marginBottom: '10px' }}
          >
            Join Our Community
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: '20px' }}>
            At Sound Library, we&apos;re more than a website - we&apos;re a
            community of sound lovers. Join us and embark on a journey through
            the world of audio. Share your creations, discuss your discoveries,
            and connect with fellow audio aficionados.
          </Typography>
          <Typography variant="body1">
            Welcome to Sound Library - where every sound matters.
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default About
