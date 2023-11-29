import React from 'react'
import Typography from '@mui/material/Typography'
import {
  HeaderBox,
  ImageBox,
  OverlayBox,
  IconTypographyBox,
  StyledGraphicEqIcon,
  ExploreButton,
} from './homeHeaderStyle'

const HomeHeader = () => {
  const handleExploreSoundsClick = () => {
    const element = document.getElementById('soundList')
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeaderBox>
      <ImageBox component="img" alt="Home image" src="/images/sound5.jpg" />
      <OverlayBox>
        <IconTypographyBox>
          <StyledGraphicEqIcon />
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            Sound Library
          </Typography>
        </IconTypographyBox>
        <ExploreButton
          onClick={handleExploreSoundsClick}
          style={{ color: '#fff' }}
        >
          Explore Sounds
        </ExploreButton>
      </OverlayBox>
    </HeaderBox>
  )
}

export default HomeHeader
