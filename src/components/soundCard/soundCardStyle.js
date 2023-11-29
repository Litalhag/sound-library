import { styled, Card, Box, CardMedia, Typography } from '@mui/material'

export const StyledCard = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  marginBottom: '16px',
  marginLeft: '8px',
  marginRight: '8px',
  width: '100%',
}))

export const ContentBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', md: 'row' },
  width: '100%',
  alignItems: 'center',
  marginBottom: '16px',
  paddingX: { xs: '16px', md: '32px' },
  [theme.breakpoints.up('md')]: {
    display: 'grid',
    gridTemplateColumns: '2fr 0.5fr 2fr 1fr',
  },
}))

export const InfoBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  width: { xs: '100%', md: 'calc(100% - 60rem)' },
  alignItems: { xs: 'center', md: 'flex-start' },
  textAlign: { xs: 'center', md: 'left' },
}))

export const StyledCardMedia = styled(CardMedia)(({ theme }) => ({
  width: 80,
  height: 80,
  objectFit: 'cover',
  alignSelf: 'center',
  order: -1,
  [theme.breakpoints.up('md')]: { order: 0 },
}))

export const ActionBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: { xs: 'column', sm: 'row' },
  justifyContent: 'space-between',
  alignItems: 'center',
  marginLeft: '32px',
  flexGrow: 1,
  marginRight: { xs: '16px', sm: '32px' },
  [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    marginTop: '16px',
  },
}))

export const StyledTypography = styled(Typography)({
  fontWeight: '600',
  marginBottom: '16px',
})
