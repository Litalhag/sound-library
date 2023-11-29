import React from 'react'
import { Box, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'

const PageNotFound = () => {
  const theme = useTheme()
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      style={{ height: '90vh', background: '#1e1c1c' }}
    >
      <img
        src="https://i.imgur.com/qIufhof.png"
        alt="Not Found"
        style={{ maxWidth: '30%', height: 'auto' }}
      />
      <Typography
        variant="body1"
        sx={{
          color: '#fff',
          fontSize: {
            xs: '0.75rem',
            sm: '0.875rem',
            md: '1rem',
            lg: '1.125rem',
          },
        }}
      >
        Page could not be found
      </Typography>
    </Box>
  )
}

export default PageNotFound
