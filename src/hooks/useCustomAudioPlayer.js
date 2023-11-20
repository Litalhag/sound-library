import { useState, useRef, useEffect } from 'react'

const useCustomAudioPlayer = () => {
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

  return {
    togglePlayPause,
    playing,
    formatTime,
    remainingTime,
    volume,
    handleVolumeChange,
    audioRef,
  }
}
export default useCustomAudioPlayer
