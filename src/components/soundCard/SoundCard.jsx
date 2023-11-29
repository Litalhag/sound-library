import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import CustomAudioPlayer from '../soundCarElements/CustomAudioPlayer'
import TagsComponent from '../soundCarElements/TagsComponent'
import { SoundInfo } from '../soundCarElements/SoundInfo'
import SoundName from '../soundCarElements/SoundName'
import SaveSoundButton from '../soundCarElements/SaveSoundButton'
import RemoveSoundButton from '../soundCarElements/RemoveSoundButton'
import DownloadSoundButton from '../soundCarElements/DownloadSoundButton'
import { useTheme } from '@mui/material'
import {
  StyledCard,
  ContentBox,
  InfoBox,
  StyledCardMedia,
  ActionBox,
  StyledTypography,
} from './soundCardStyle'

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
    <StyledCard>
      <ContentBox>
        <InfoBox>
          <StyledTypography variant="h6" component="div" noWrap>
            <SoundName
              name={sound.name}
              showFullName={showFullName}
              toggleShowFullName={setShowFullName}
            />
          </StyledTypography>
          <CustomAudioPlayer src={sound.previewSound} />
        </InfoBox>

        <StyledCardMedia
          component="img"
          image={sound.imageUrl}
          alt={`Waveform for ${sound.name}`}
        />

        <TagsComponent tags={sound.tags} />

        <ActionBox>
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
        </ActionBox>

        <SoundInfo
          type={sound.type}
          created={sound.created}
          duration={sound.duration}
        />
      </ContentBox>
    </StyledCard>
  )
}

export default SoundCard
