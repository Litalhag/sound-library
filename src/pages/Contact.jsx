import React from 'react'
import { Box, Typography, Container, Link } from '@mui/material'

const backgroundImage = '/src/assets/sound14.jpg'

const Contact = () => {
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
        <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Sound Library Support Team
        </Typography>
        <Typography sx={{ mb: 1 }}>
          Feel free to reach out to our support team with any questions,
          feedback, or inquiries you might have. <br /> Our team is dedicated to
          providing you with the best possible experience.
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
          <Link href="#" color="inherit" sx={{ mr: 2, textDecoration: 'none' }}>
            Facebook
          </Link>
          <Link href="#" color="inherit" sx={{ mr: 2, textDecoration: 'none' }}>
            Twitter
          </Link>
          <Link href="#" color="inherit" sx={{ textDecoration: 'none' }}>
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
          We value your input and look forward to hearing from you. Thank you
          for being a part of our Sound Library community.
        </Typography>
      </Container>
    </Box>
  )
}

export default Contact
