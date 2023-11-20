import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'

const ShowcaseCard = ({ title, description, image, alt }) => {
  return (
    <Card
      sx={{
        width: 500,
        height: 300,
        margin: '20px 25px',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 150,
            objectFit: 'cover',
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
