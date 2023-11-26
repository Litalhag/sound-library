import { useState, useEffect, useContext } from 'react'
import { SoundContext } from '../context/SoundContext'
// filterBy is ths state managing the current search
// filterBy.text is the search term used to filter the sound data

const useSearch = (soundListRef) => {
  // filterBy = object that holds multiple search categories
  // filterBy.text = extends this object to include more search categories
  const [filterBy, setFilterBy] = useState({ text: '' })
  const [filteredSounds, setFilteredSounds] = useState([])
  const { sounds } = useContext(SoundContext)

  // listens for changes in filterBy (filterBy.text), when it changes it filters the sounds based on the search term
  useEffect(() => {
    if (filterBy.text) {
      const results = sounds.filter(
        (sound) =>
          sound.name.includes(filterBy.text) ||
          sound.description.includes(filterBy.text) ||
          sound.tags.includes(filterBy.text)
      )
      setFilteredSounds(results)
    } else {
      setFilteredSounds(sounds)
    }
  }, [filterBy, sounds])

  // when this function triggered - it updates the filterBy state with a new value
  const handleSearch = ({ target }) => {
    const { value } = target
    console.log('value:', value)
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, text: value }))
  }

  // clear the search term by setting filterBy.text to empty string
  const resetSearch = () => {
    setFilterBy({ ...filterBy, text: '' })
  }

  // handles the search form getFormSubmissionInfo, includes scrolling
  const handleSubmitSearch = (e) => {
    e.preventDefault()
    if (soundListRef.current) {
      soundListRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return {
    filterBy,
    filteredSounds,
    handleSearch,
    resetSearch,
    handleSubmitSearch,
  }
}
export default useSearch

// useEffect(() => {
//   if (filterBy.text) {
//     setFilteredSounds(
//       sounds.filter((sound) => {
//         return (
//           sound.name.includes(filterBy.text) ||
//           sound.description.includes(filterBy.text) ||
//           sound.tags.includes(filterBy.text)
//         )
//       })
//     )
//   }
// }, [filterBy, sounds])
