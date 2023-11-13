import { Box } from '@mui/material'

const HomeHeader = () => {
  return (
    <Box
      sx={{
        position: 'relative',

        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
          height: '550px',
          objectFit: 'cover',
        }}
        alt="Home image"
        src="/src/assets/sound5.jpg"
      />
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        }}
      />
    </Box>
  )
}

export default HomeHeader
