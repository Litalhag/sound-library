import { styled } from '@mui/material/styles'
import { Box, Grid, Avatar, Paper } from '@mui/material'

export const StyledBox = styled(Box)({
  backgroundColor: '#1e1c1c',
  minHeight: '100vh',
  color: '#fff',
  pt: '70px',
  display: 'flex',
  justifyContent: 'center',
})

export const StyledGrid = styled(Grid)({
  maxWidth: '1200px',
  mx: 'auto',
})

export const StyledAvatarBox = styled(Box)({
  textAlign: 'center',
  mx: 'auto',
})

export const StyledAvatar = styled(Avatar)({
  width: 120,
  height: 120,
  mx: 'auto',
})

export const StyledPaper = styled(Paper)({
  padding: 4,
  mx: { xs: -2, sm: 0.5, md: 0 },
  width: '100%',
  maxWidth: { xs: 'calc(100% - 16px)', lg: 'none' },
})
