import React, { useState } from 'react'
import { Tabs, Tab, createTheme, ThemeProvider } from '@mui/material'

import { Link } from 'react-router-dom'

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#fff',
          '&.Mui-selected': {
            color: '#fff',
          },
        },
      },
    },
  },
})

const NavbarTabs = () => {
  const [value, setValue] = useState(0)

  const pages = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <ThemeProvider theme={theme}>
      <Tabs
        value={value}
        onChange={(e, value) => setValue(value)}
        sx={{
          '& .MuiTabs-indicator': {
            backgroundColor: '#fff',
          },
          '& .MuiButtonBase-root': {
            color: '#fff',
            '&:hover': {
              backgroundColor: 'transparent',
              outline: 'none',
            },
            '&.Mui-focusVisible': {
              backgroundColor: 'transparent',
              outline: 'none',
            },
          },
          flexGrow: 1,
          display: { xs: 'none', md: 'flex' },
        }}
      >
        {pages.map((page, index) => (
          <Tab
            key={index}
            label={page.label}
            component={Link}
            to={page.path}
            value={index}
          />
        ))}
      </Tabs>
    </ThemeProvider>
  )
}

export default NavbarTabs
