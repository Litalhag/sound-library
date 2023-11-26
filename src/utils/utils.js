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
