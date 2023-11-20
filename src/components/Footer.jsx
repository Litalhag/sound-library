import React from 'react'
import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1c1c',
        color: '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Sound Library All rights reserved
      </Typography>
      <Box sx={{ marginTop: '10px' }}>
        <Link href="/terms" color="inherit">
          Terms & Conditions
        </Link>
        <Link href="/privacy" sx={{ marginX: '15px' }} color="inherit">
          Privacy Policy
        </Link>
        <Link href="/contact" color="inherit">
          Contact Us
        </Link>
      </Box>
    </Box>
  )
}

export default Footer
