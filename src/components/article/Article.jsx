import React from 'react'
import { Box, Typography, useTheme, Container } from '@mui/material'
import { useParams } from 'react-router-dom'
import { articleData } from './articleData'

const Article = () => {
  const { articleId } = useParams()
  const article = articleData.find((article) => article.articleId === articleId)
  const theme = useTheme()
  if (!article) {
    return <div>Article not found</div>
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '90vh' }}>
      <Box
        sx={{
          position: 'relative',
          height: { xs: '50vh', sm: '55vh', md: '55vh', lg: '50vh' },
          overflow: 'hidden',
          '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          },
          '&:after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
          },
        }}
      >
        <img src={article.image} alt="Article" />
        <Typography
          variant="h3"
          component="h3"
          sx={{
            position: 'absolute',
            top: { xs: '55%', sm: '50%' },
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            textAlign: 'center',
            color: 'white',
            fontFamily: 'monospace',
            fontStyle: 'italic',
            p: 2,
            zIndex: 1,
            fontSize: { xs: '8vw', sm: '6vw', md: '5vw', lg: '3.5vw' },
          }}
        >
          {article.title}
        </Typography>
      </Box>

      <Box sx={{ borderBottom: '10px solid grey', width: '100%' }} />
      <Box
        component="footer"
        sx={{
          flexGrow: 1,
          pt: { xs: 2, sm: 3, md: 4, lg: 6 },
          pb: { xs: 2, sm: 3, md: 4 },
          background: '#cfcccccb',
          '& p': {
            color: '#141313',
            overflow: 'hidden',
          },
        }}
      >
        <Container maxWidth="sm" sx={{ fontStyle: 'italic' }}>
          <Typography
            variant="h6"
            component="h6"
            sx={{
              mt: { xs: 1, sm: 1, md: 2, lg: 2 },
              mb: { xs: 2, sm: 2, md: 2, lg: 2 },
            }}
          >
            {article.subTitle}
          </Typography>
          <Typography
            variant="body1"
            component="p"
            sx={{
              fontSize: '17px',
              fontWeight: '400',
              overflow: 'hidden',
            }}
          >
            {article.content}
          </Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default Article
