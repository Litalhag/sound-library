import React, { useState } from 'react'
import { Box, Typography, IconButton } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'

const TagsComponent = ({ tags }) => {
  const [showAllTags, setShowAllTags] = useState(false)

  const toggleShowAllTags = () => {
    setShowAllTags(!showAllTags)
  }

  const maxTagWidth = '250px'

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 2,
        alignItems: 'center',
        width: showAllTags ? maxTagWidth : 'auto',
        overflow: 'hidden',
      }}
    >
      {tags.slice(0, showAllTags ? tags.length : 4).map((tag, index) => (
        <Typography
          key={index}
          sx={{
            marginRight: 1,
            marginBottom: 1,
            backgroundColor: '#f0f0f0',
            borderRadius: 1,
            padding: '2px 6px',
          }}
        >
          {tag}
        </Typography>
      ))}
      {tags.length > 4 && (
        <IconButton onClick={toggleShowAllTags} size="small">
          <MoreHorizIcon />
        </IconButton>
      )}
    </Box>
  )
}

export default TagsComponent
