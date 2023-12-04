import React, { useContext, useEffect } from 'react'
import {
  Box,
  Typography,
  Avatar,
  Paper,
  Grid,
  List,
  ListItem,
} from '@mui/material'
import { AuthContext } from '../../context/AuthContext'
import { SoundContext } from '../../context/SoundContext'
import SoundCard from '../../components/soundCard/SoundCard'
import { fetchUserSavedSounds } from '../../services/sound.service'
import { formatDate } from '../../utils/utils'
import { ErrorContext } from '../../context/ErrorContext'
import Loader from '../../components/Loader'
import Error from '../../components/Error'

const UserProfile = () => {
  const { user, removeUserSavedSound } = useContext(AuthContext)
  const { savedSounds, setSavedSounds, removeSound, isLoading } =
    useContext(SoundContext)
  const { error, setError } = useContext(ErrorContext)

  useEffect(() => {
    if (!user) {
      return
    }
    console.log('useEffect triggered in UserProfile')
    const fetchSavedSounds = async () => {
      try {
        console.log('useEffect try Fetching saved sounds for user: ', user)
        // fetching latest saved sound IDs
        const userSavedSoundIds = user.savedSounds
        const userSavedSounds = await fetchUserSavedSounds(userSavedSoundIds)
        setSavedSounds(userSavedSounds)
        console.log('useEffect was Fetched saved sounds: ', userSavedSounds)
      } catch (err) {
        console.log(err)
        setError(err)
      }
    }
    fetchSavedSounds()
  }, [user?.savedSounds, user, setSavedSounds, setError])

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
              {error && <Error onRetry={fetchUserSavedSounds} />}
              {isLoading ? (
                <Loader />
              ) : (
                savedSounds.map((sound) => (
                  <ListItem key={sound.id}>
                    <SoundCard
                      sound={sound}
                      isUserProfile={true}
                      removeSound={removeSound}
                      removeUserSavedSound={removeUserSavedSound}
                    />
                  </ListItem>
                ))
              )}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  )
}

export default UserProfile
