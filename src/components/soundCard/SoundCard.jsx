import React, { useContext, useState } from 'react'
import CustomAudioPlayer from './soundCarElements/CustomAudioPlayer'
import TagsComponent from './soundCarElements/TagsComponent'
import { SoundInfo } from './soundCarElements/SoundInfo'
import SoundName from './soundCarElements/SoundName'
import SaveSoundButton from './soundCarElements/SaveSoundButton'
import RemoveSoundButton from './soundCarElements/RemoveSoundButton'
import DownloadSoundButton from './soundCarElements/DownloadSoundButton'
import { AuthContext } from '../context/AuthContext'
import { useTheme } from '@mui/material'
import {
  StyledCard,
  StyledBox,
  StyledTextContainer,
  StyledTypography,
  StyledCardMedia,
  StyledBoxActions,
} from './SoundCard.styles'

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
    <StyledCard theme={theme}>
      <StyledBox theme={theme}>
        <StyledTextContainer theme={theme}>
          <StyledTypography component="div" variant="h6" noWrap theme={theme}>
            <SoundName
              name={sound.name}
              showFullName={showFullName}
              toggleShowFullName={setShowFullName}
            />
          </StyledTypography>
          <CustomAudioPlayer src={sound.previewSound} />
        </StyledTextContainer>

        <StyledCardMedia
          component="img"
          theme={theme}
          image={sound.imageUrl}
          alt={`Waveform for ${sound.name}`}
        />

        <StyledBoxActions theme={theme}>
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
        </StyledBoxActions>

        <SoundInfo
          type={sound.type}
          created={sound.created}
          duration={sound.duration}
        />
      </StyledBox>
    </StyledCard>
  )
}

export default SoundCard
