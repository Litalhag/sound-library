import { useState, useEffect, useContext } from 'react'
import { SoundContext } from '../context/SoundContext'

const useSearch = () => {
  const [filterBy, setFilterBy] = useState({ text: '' })
  const [filteredSounds, setFilteredSounds] = useState([])
  const { sounds } = useContext(SoundContext)

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

  const handleSearch = (searchValue) => {
    setFilterBy({ ...filterBy, text: searchValue })
  }

  const resetSearch = () => {
    setFilterBy({ ...filterBy, text: '' })
    // setFilteredSounds(sounds)
  }

  return {
    filterBy,
    filteredSounds,
    handleSearch,
    resetSearch,
    // isLoading,
    // error,
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

// const handleSearch = ({ target }) => {
//   const { value } = target
//   console.log('value:', value)
//   setFilterBy((prevFilterBy) => ({ ...prevFilterBy, text: value }))
// }
