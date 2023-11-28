import * as React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { copyUrlToClipboard } from '../../utils/utils'

const ShowcaseCard = ({ title, description, image, alt, articleId }) => {
  const navigate = useNavigate()

  const handleLearnMoreSubmit = () => {
    navigate(`/article/${articleId}`)
  }

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
        <Button size="small" onClick={copyUrlToClipboard}>
          Share
        </Button>
        <Button size="small" onClick={handleLearnMoreSubmit}>
          Learn More
        </Button>
      </CardActions>
    </Card>
  )
}
export default ShowcaseCard
