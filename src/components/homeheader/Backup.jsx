import GraphicEqIcon from '@mui/icons-material/GraphicEq'

import { Box, Typography, Button } from '@mui/material'

const HomeHeader = () => {
  const handleExploreSoundsClick = () => {
    const element = document.getElementById('soundList')
    console.log(element)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }
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
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 2,
          }}
        >
          <GraphicEqIcon
            sx={{ fontSize: '5rem', color: 'white', marginRight: 1 }}
          />
          <Typography
            variant="h2"
            sx={{
              color: 'white',
              fontFamily: 'monospace',
              ontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            Sound Library
          </Typography>
        </Box>
        <Button
          variant="contained"
          sx={{
            background: '#4ED448',
            padding: '0.7rem',
            boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)',
            // #1e1c1c
            '&:hover': {
              background: 'transparent',
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.9)',
            },
            backgroundImage:
              'linear-gradient(to bottom, #4ED448 0%, #3cb043 100%)',
            transition: 'all 0.3s ease',
          }}
          onClick={handleExploreSoundsClick}
        >
          Explore Sounds
        </Button>
      </Box>
    </Box>
  )
}

export default HomeHeader
