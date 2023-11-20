import React from 'react'
import { Box, Typography, Link } from '@mui/material'

const Contact = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#1e1c1c',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
        Contact Us
      </Typography>
      <Typography variant="h6" sx={{ mb: 1 }}>
        Sound Library Support Team
      </Typography>
      <Typography sx={{ mb: 1 }}>
        Feel free to reach out to our support team with any questions, feedback,
        or inquiries you might have. <br /> Our team is dedicated to providing
        you with the best possible experience.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        <strong>Email:</strong> support@soundlibrary.fake
      </Typography>
      <Typography sx={{ mb: 1 }}>
        <strong>Phone:</strong> +1-555-0123-4567
      </Typography>
      <Typography sx={{ mb: 1 }}>
        <strong>Operating Hours:</strong> Monday - Friday: 9:00 AM - 5:00 PM
        (EST)
      </Typography>
      <Typography sx={{ mb: 3 }}>
        <strong>Mailing Address:</strong>
        <br />
        Sound Library Inc.
        <br />
        123 Audio Avenue, Suite 200
        <br />
        Melody City, MA 02100
        <br />
        United States
      </Typography>
      <Typography sx={{ mb: 1 }}>Connect with Us on Social Media:</Typography>
      <Box sx={{ mb: 3 }}>
        <Link href="#" color="inherit" sx={{ mr: 2 }}>
          Facebook
        </Link>
        <Link href="#" color="inherit" sx={{ mr: 2 }}>
          Twitter
        </Link>
        <Link href="#" color="inherit">
          Instagram
        </Link>
      </Box>
      <Typography sx={{ mb: 1 }}>
        For immediate assistance, please check our{' '}
        <Link href="#" color="inherit">
          FAQs
        </Link>{' '}
        or use our live chat feature during operating hours.
      </Typography>
      <Typography sx={{ mb: 1 }}>
        <strong>Press Inquiries:</strong> press@soundlibrary.fake
      </Typography>
      <Typography sx={{ mb: 1 }}>
        <strong>Partnership Opportunities:</strong> partners@soundlibrary.fake
      </Typography>
      <Typography>
        We value your input and look forward to hearing from you. Thank you for
        being a part of our Sound Library community.
      </Typography>
    </Box>
  )
}

export default Contact
