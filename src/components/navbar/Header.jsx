import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  useMediaQuery,
  useTheme,
  IconButton,
  Box,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Tabs,
  Tab,
} from '@mui/material'

import MenuIcon from '@mui/icons-material/Menu'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'
import AdbIcon from '@mui/icons-material/Adb'
import NavTabs from './NavTabs'
import DrawerComp from './DrawerComp'

function Header() {
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <AppBar position="fixed" sx={{ background: '#1e1c1c' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <GraphicEqIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
            }}
          >
            Sound Library
          </Typography>
          {isMatch ? (
            <>
              <Typography>
                <GraphicEqIcon
                  sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
                />
              </Typography>
              <DrawerComp />
            </>
          ) : (
            <>
              <NavTabs />
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Header
