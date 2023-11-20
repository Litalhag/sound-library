import * as React from 'react'
import Box from '@mui/material/Box'
import ShowcaseCard from './ShowcaseCard'
import { showcaseData } from './showcaseData'

const ShowcaseContainer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
      }}
    >
      {showcaseData.map((card, index) => (
        <ShowcaseCard
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          alt={card.alt}
        />
      ))}
    </Box>
  )
}

export default ShowcaseContainer

// import { useNavigate } from 'react-router-dom'
//(
// const navigate = useNavigate()

// const goToSoundList = () => {
//   navigate('/sound-list')
// }

//   <Button
//     variant="contained"
//     sx={{ background: '#4ED448', padding: '0.7rem' }}
//     onClick={goToSoundList}
//   >
//     Explore Sounds
//   </Button>
// )
