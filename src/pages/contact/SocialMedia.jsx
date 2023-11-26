import React from 'react'
import { Box, Link } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'

const SocialMedia = () => {
  return (
    <Box sx={{ mb: 3, fontFamily: 'Roboto' }}>
      <Link
        href="#"
        color="inherit"
        sx={{
          mr: 2,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <FacebookIcon sx={{ mr: 1 }} />
        Facebook
      </Link>
      <Link
        href="#"
        color="inherit"
        sx={{
          mr: 2,
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <TwitterIcon sx={{ mr: 1 }} />
        Twitter
      </Link>
      <Link
        href="#"
        color="inherit"
        sx={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <InstagramIcon sx={{ mr: 1 }} />
        Instagram
      </Link>
    </Box>
  )
}
export default SocialMedia
