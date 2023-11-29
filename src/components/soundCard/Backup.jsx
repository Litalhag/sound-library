import React, { useContext, useState } from 'react'
import { Card, CardMedia, Typography, Box, useTheme } from '@mui/material'

import CustomAudioPlayer from './soundCarElements/CustomAudioPlayer'
import TagsComponent from './soundCarElements/TagsComponent'
import { SoundInfo } from './soundCarElements/SoundInfo'
import SoundName from './soundCarElements/SoundName'
import SaveSoundButton from './soundCarElements/SaveSoundButton'
import RemoveSoundButton from './soundCarElements/RemoveSoundButton'
import DownloadSoundButton from './soundCarElements/DownloadSoundButton'
import { AuthContext } from '../context/AuthContext'

export const SoundCard = ({
  sound,
  isUserProfile,
  removeSound,
  removeUserSavedSound,
  isSoundSaved,
}) => {
  const [showFullName, setShowFullName] = useState(false)
  const { user } = useContext(AuthContext)
  const theme = useTheme()

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        marginBottom: 2,
        marginLeft: 1,
        marginRight: 1,
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          width: '100%',
          alignItems: 'center',
          marginBottom: 2,
          paddingX: { xs: 2, md: 4 },
          [theme.breakpoints.up('md')]: {
            display: 'grid',
            gridTemplateColumns: '2fr .5fr 2fr 1fr',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', md: 'calc(100% - 60rem)' },
            alignItems: { xs: 'center', md: 'flex-start' },
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Typography
            component="div"
            variant="h6"
            noWrap
            sx={{
              fontWeight: '600',
              marginBottom: 2,
            }}
          >
            <SoundName
              name={sound.name}
              showFullName={showFullName}
              toggleShowFullName={setShowFullName}
            />
          </Typography>
          <CustomAudioPlayer src={sound.previewSound} />
        </Box>

        <CardMedia
          component="img"
          sx={{
            width: 80,
            height: 80,
            objectFit: 'cover',
            alignSelf: 'center',
            order: -1,
            [theme.breakpoints.up('md')]: { order: 0 },
          }}
          image={sound.imageUrl}
          alt={`Waveform for ${sound.name}`}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            marginLeft: 4,
            flexGrow: 1,
            marginRight: { xs: 2, sm: 4 },
            [theme.breakpoints.down('sm')]: {
              marginLeft: 0,
              marginTop: 2,
            },
          }}
        >
          <TagsComponent tags={sound.tags} />
          {isUserProfile ? (
            <>
              <RemoveSoundButton
                sound={sound}
                removeSound={removeSound}
                removeUserSavedSound={removeUserSavedSound}
              />
              <DownloadSoundButton sound={sound} />
            </>
          ) : (
            user &&
            (isSoundSaved ? (
              <RemoveSoundButton
                sound={sound}
                removeSound={removeSound}
                removeUserSavedSound={removeUserSavedSound}
              />
            ) : (
              <SaveSoundButton sound={sound} />
            ))
          )}
        </Box>
        <SoundInfo
          type={sound.type}
          created={sound.created}
          duration={sound.duration}
        />
      </Box>
    </Card>
  )
}
export default SoundCard
