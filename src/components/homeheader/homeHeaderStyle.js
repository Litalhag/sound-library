import { Box, Button, styled } from '@mui/material'
import GraphicEqIcon from '@mui/icons-material/GraphicEq'

export const HeaderBox = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
})

export const ImageBox = styled(Box)({
  width: '100%',
  height: '550px',
  objectFit: 'cover',
})

export const OverlayBox = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

export const IconTypographyBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '16px',
})

export const StyledGraphicEqIcon = styled(GraphicEqIcon)({
  fontSize: '5rem',
  color: 'white',
  marginRight: '8px',
})

export const ExploreButton = styled(Button)({
  background: '#4ED448',
  padding: '0.7rem',
  boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
  backgroundImage: 'linear-gradient(to bottom, #4ED448 0%, #3cb043 100%)',
  transition: 'all 0.3s ease',
  '&:hover': {
    background: 'transparent',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.9)',
  },
})
