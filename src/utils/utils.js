import { toast } from 'react-toastify'

export const copyUrlToClipboard = () => {
  navigator.clipboard
    .writeText(window.location.href)
    // Promise.reject('Simulated error')
    .then(() => {
      toast('URL copied to clipboard!', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#1c1e1e',
          color: '#fff',
        },
      })
    })
    .catch((err) => {
      console.error('Failed to copy URL: ', err)
      toast.error('Failed to copy URL', {
        style: {
          backgroundColor: '#1c1e1e',
          color: '#e75217',
        },
      })
    })
}

export const scrollToRef = (ref) => {
  if (ref && ref.current) {
    ref.current.scrollIntoView({ behavior: 'smooth' })
  }
}

export const formatDate = (date) => {
  if (!date) return 'Unknown'
  const dateObj = date instanceof Date ? date : new Date(date.seconds * 1000)
  return dateObj.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export const isSoundSavedByUser = (user, soundId) => {
  return user && user.savedSounds.includes(soundId)
}

export function debounce(cb, delay) {
  let timeout
  return function (...arg) {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      cb(...arg)
    }, delay)
  }
}
