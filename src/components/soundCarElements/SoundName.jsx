import React from 'react'
import { IconButton, Tooltip } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import ReadMoreIcon from '@mui/icons-material/ReadMore'

const SoundName = ({ name, showFullName, toggleShowFullName }) => {
  const handleMoreInfoClick = () => {
    toggleShowFullName(!showFullName)
    event.currentTarget.blur()
  }

  const displaySoundName = (str, num) => {
    if (showFullName || str.length <= num) {
      return (
        <>
          {str}
          {str.length > num && (
            <Tooltip title="Less Info">
              <IconButton onClick={handleMoreInfoClick}>
                <RemoveIcon color="action" sx={{ fontSize: 30 }} />
              </IconButton>
            </Tooltip>
          )}
        </>
      )
    }

    return (
      <>
        {str.slice(0, num)}...
        <Tooltip title="More Info">
          <IconButton onClick={handleMoreInfoClick}>
            <ReadMoreIcon color="action" sx={{ fontSize: 30 }} />
          </IconButton>
        </Tooltip>
      </>
    )
  }

  return <>{displaySoundName(name, 15)}</>
}

export default SoundName
