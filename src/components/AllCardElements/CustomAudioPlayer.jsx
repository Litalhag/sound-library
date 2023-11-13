import React, { useState, useRef, useEffect } from 'react'
import { Box, IconButton, Slider, Typography } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'

const CustomAudioPlayer = ({ src }) => {
  const [playing, setPlaying] = useState(false)
  const [volume, setVolume] = useState(100)
  const [remainingTime, setRemainingTime] = useState(0)
  const audioRef = useRef(null)

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (audio.paused) {
      audio.play()
      setPlaying(true)
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  const handleVolumeChange = (event, newValue) => {
    setVolume(newValue)
    audioRef.current.volume = newValue / 100
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`
  }

  useEffect(() => {
    const audio = audioRef.current

    const setAudioData = () => {
      setRemainingTime(audio.duration)
    }

    const updateTime = () => {
      setRemainingTime(audio.duration - audio.currentTime)
    }

    audio.addEventListener('loadedmetadata', setAudioData)
    audio.addEventListener('timeupdate', updateTime)

    return () => {
      audio.removeEventListener('loadedmetadata', setAudioData)
      audio.removeEventListener('timeupdate', updateTime)
    }
  }, [])

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
