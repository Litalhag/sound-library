import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Container } from '@mui/material'

import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import NavOptions from './NavOptions'
import { ResponsiveNav } from './ResponsiveNav'
import NavbarTabs from './NavbarTabs'
import { Link } from 'react-router-dom'

function NavHead() {
  return (
    <AppBar position="fixed" sx={{ bgcolor: '#1e1c1c', height: '70px' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GraphicEqIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Sound Library
          </Typography>

          <NavbarTabs />

          {/* For Responsive navbar */}
          <ResponsiveNav />

          {/* Login */}
          <NavOptions />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default NavHead
