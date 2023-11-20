import React, { useState, useRef, useEffect } from 'react'
import { Box, IconButton, Slider, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import useCustomAudioPlayer from '../../hooks/useCustomAudioPlayer'

const CustomAudioPlayer = ({ src }) => {
  const {
    togglePlayPause,
    playing,
    formatTime,
    remainingTime,
    volume,
    handleVolumeChange,
    audioRef,
  } = useCustomAudioPlayer()

  return (
    <Box
      sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#868686' }}
    >
      <IconButton onClick={togglePlayPause} sx={{ color: '#868686' }}>
        {playing ? <PauseIcon /> : <PlayArrowIcon />}
      </IconButton>
      <Typography variant="caption" sx={{ minWidth: 30 }}>
        {formatTime(remainingTime)}
      </Typography>
      <Slider
        value={volume}
        onChange={handleVolumeChange}
        min={0}
        max={100}
        size="small"
        aria-label="Volume"
        valueLabelDisplay="auto"
        sx={{ width: 200, color: '#868686' }}
      />
      <VolumeUpIcon sx={{ color: '#3d3b3b', marginLeft: 2 }} />
      <audio
        ref={audioRef}
        src={src}
        preload="auto"
        style={{ display: 'none' }}
      />
    </Box>
  )
}

export default CustomAudioPlayer
