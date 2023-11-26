import React from 'react'
import { Typography } from '@mui/material'

const AboutOuter = () => {
  return (
    <>
      <Typography>Built for Creators</Typography>
      <Typography variant="body1" sx={{ mb: '20px' }}>
        Whether you&apos;re a musician, a video editor, a content creator, or
        just an audiophile, Sound Library provides an intuitive and resourceful
        environment. Enhance your projects with the perfect sounds, explore new
        audio landscapes, or simply find inspiration in our eclectic collection.
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
      <Typography variant="h6" sx={{ fontWeight: '700', fontStyle: 'italic' }}>
        Welcome to Sound Library - where every sound matters.
      </Typography>
    </>
  )
}
export default AboutOuter
