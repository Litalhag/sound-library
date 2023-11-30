import { styled, TextField, Button } from '@mui/material'

export const StyledForm = styled('form')({
  display: 'grid',
  gridTemplateColumns: 'auto auto auto',
  alignItems: 'center',
  gap: '8px',
  justifyContent: 'center',
  paddingTop: '20px',
  paddingBottom: '20px',
  background: '#1e1c1c',
  '@media (max-width: 600px)': {
    gridTemplateColumns: '1fr',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

export const StyledTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  '@media (max-width: 600px)': {
    width: '70%',
    margin: '0 auto',
  },
}))

export const StyledButton = styled(Button)({
  background: '#1e1c1c',
  border: '1px solid #969090',
  fontWeight: '400',
  '&:hover': {
    backgroundColor: 'transparent',
    outline: 'none',
  },
  '@media (max-width: 600px)': {
    width: '70%',
    margin: '0 auto',
  },
})
