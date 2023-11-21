import React, { useContext, useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  List,
  ListItem,
} from '@mui/material'
import { AuthContext } from '../context/AuthContext'
import { SoundContext } from '../context/SoundContext'
import SoundCard from '../components/SoundCard'
import { fetchUserSavedSounds, onRemoveSound } from '../services/sound.service'

const UserProfile = () => {
  const { user, updateUserSavedSounds, removeUserSavedSound } =
    useContext(AuthContext)
  const { savedSounds, setSavedSounds, removeSound } = useContext(SoundContext)

  useEffect(() => {
    if (!user) {
      return
    }
    console.log('useEffect triggered in UserProfile')
    const fetchSavedSounds = async () => {
      try {
        console.log('useEffect try Fetching saved sounds for user: ', user)
        // fetching the latest saved sound IDs
        const userSavedSoundIds = user.savedSounds
        const userSavedSounds = await fetchUserSavedSounds(userSavedSoundIds)
        setSavedSounds(userSavedSounds)
        console.log('useEffect was Fetched saved sounds: ', userSavedSounds)
      } catch (err) {
        console.log(err)
      }
    }
    fetchSavedSounds()
  }, [user?.savedSounds, user, setSavedSounds])

  const formatDate = (date) => {
    if (!date) return 'Unknown'
    const dateObj = date instanceof Date ? date : new Date(date.seconds * 1000)
    return dateObj.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <Box
      sx={{
        backgroundColor: '#1e1c1c',
        minHeight: '100vh',
        color: '#fff',
        pt: 15,
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid container spacing={2} sx={{ maxWidth: '1200px', mx: 'auto' }}>
        {/* User details */}
        <Grid item xs={12} md={3} lg={2}>
          {' '}
          <Box sx={{ textAlign: 'center', mx: 'auto' }}>
            <Avatar
              alt={user?.displayName || 'Avatar'}
              src={user?.photoURL || './default-avatar.png'}
              sx={{ width: 120, height: 120, mx: 'auto' }}
            />
            <Typography variant="h5" sx={{ mt: 2 }}>
              {user?.displayName || 'Name not available'}
            </Typography>
            <Typography variant="body1">
              Email: {user?.email || 'Email not available'}
            </Typography>
            <Typography variant="body1">
              Joined: {formatDate(user?.createdAt)}
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={9} lg={10}>
          {' '}
          <Paper
            sx={{
              padding: 4,
              mx: { xs: -2, sm: 0.5, md: 0 },
              width: '100%',
              maxWidth: { xs: 'calc(100% - 16px)', lg: 'none' },
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Saved Sounds
            </Typography>
            <List sx={{ maxWidth: '100%' }}>
              {savedSounds.map((sound) => (
                <ListItem key={sound.id}>
                  <SoundCard
                    sound={sound}
                    isUserProfile={true}
                    removeSound={removeSound}
                    removeUserSavedSound={removeUserSavedSound}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserProfile
