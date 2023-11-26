import React from 'react'
import { Typography } from '@mui/material'

const AboutIntro = () => {
  return (
    <>
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
        the potential to inspire creativity. Our platform is dedicated to audio
        enthusiasts, creators, and anyone curious about the vast universe of
        sounds.
      </Typography>
      <Typography variant="body1" sx={{ mb: '20px' }}>
        Our extensive library features over 100 meticulously curated sounds,
        each sound in our collection is more than just a file - it&apos;s an
        experience, an inspiration, a spark for creativity.
      </Typography>
    </>
  )
}
export default AboutIntro
