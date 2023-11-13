import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, Button, CardActionArea, CardActions } from '@mui/material'

const ShowcaseCard = ({ title, description, image, alt }) => {
  return (
    <Card
      sx={{
        width: 500, // Fixed width for a rectangular shape
        height: 300, // Fixed height for a rectangular shape
        margin: '20px', // Spacing around the card
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 150, // Height for the image
            objectFit: 'cover', // Ensures the image covers the area properly
          }}
          image={image}
          alt={alt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}
export default ShowcaseCard
