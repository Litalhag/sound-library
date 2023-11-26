import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import {
  Typography,
  IconButton,
  Box,
  Menu,
  Avatar,
  Tooltip,
  MenuItem,
  Button,
  Backdrop,
  CircularProgress,
} from '@mui/material'

const NavOptions = () => {
  const [anchorElUser, setAnchorElUser] = useState(null)
  const { user, login, logout, loading } = useContext(AuthContext)

  const navigate = useNavigate()

  const handleMenuItemClick = (setting) => {
    if (setting === 'SignIn') {
      login()
    } else if (setting === 'Logout') {
      logout()
    } else if (setting === 'Profile') {
      navigate('/user-profile')
    }
    handleCloseUserMenu()
    console.log(user)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  // const settings = user ? ['Profile', 'Logout'] : ['SignIn']
  const settings = user ? ['Profile', 'Logout'] : []

  return (
    <>
      <Box sx={{ flexGrow: 0 }}>
        {user ? (
          <>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={user?.displayName || 'Avatar'}
                  src={user?.photoURL || './default-avatar.png'}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem
                  key={setting}
                  onClick={() => handleMenuItemClick(setting)}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <Button color="inherit" onClick={login}>
            Sign In
          </Button>
        )}
      </Box>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default NavOptions
