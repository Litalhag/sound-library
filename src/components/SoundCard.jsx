import React, { useState } from 'react'
import {
  Card,
  CardMedia,
  Typography,
  Box,
  useTheme,
  Fab,
  Tooltip,
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import CustomAudioPlayer from './AllCardElements/CustomAudioPlayer'
import TagsComponent from './AllCardElements/TagsComponent'
import { SoundInfo } from './AllCardElements/SoundInfo'
import { Add } from '@mui/icons-material'

const SoundCard = ({ sound }) => {
  const [showFullName, setShowFullName] = useState(false)
  const theme = useTheme()
  const onSaveSound = (soundId) => {
    console.log(soundId)
  }

  const handleMoreInfoClick = () => {
    setShowFullName(!showFullName)
  }

  const soundNameLimit = (str, num) => {
    if (showFullName || str.length <= num) {
      return (
        <>
          {str}
          {str.length > num && (
            <Tooltip
              title="Less Info"
              onClick={handleMoreInfoClick}
              style={{ cursor: 'pointer', fontSize: 'small' }}
            >
              <RemoveIcon fontSize="small" /> Less Info
            </Tooltip>
          )}
        </>
      )
    }

    return (
      <>
        {str.slice(0, num)}
        <Tooltip
          title="More Info"
          onClick={handleMoreInfoClick}
          style={{ cursor: 'pointer', fontSize: 'small' }}
        >
          <AddIcon fontSize="small" /> More Info
        </Tooltip>
      </>
    )
  }

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
        {/* Container for text and audio */}
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
            {soundNameLimit(sound.name, 40)}
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
            marginLeft: 4,
            flexGrow: 1,
            [theme.breakpoints.down('sm')]: { marginLeft: 0 },
          }}
        >
          <TagsComponent tags={sound.tags} />
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
