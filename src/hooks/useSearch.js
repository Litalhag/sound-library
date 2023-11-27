import { useState, useContext, useEffect } from 'react'
import { SoundContext } from '../context/SoundContext'

const useSearch = () => {
  // filterBy=Stores the current term used for displaying search results, updated when a search is submitted.
  const [filterBy, setFilterBy] = useState('')
  const [filteredSounds, setFilteredSounds] = useState([])
  const { sounds } = useContext(SoundContext)

  // useEffect(())

  // clearing filterBy and filteredSounds
  const resetSearch = () => {
    console.log('Resetting search')
    setFilterBy('')
    setFilteredSounds([])
  }

  // triggered when a search is submitted
  //updates filterBy with the new search term,
  // filters the sounds based on this term, and updates filteredSounds with the results.
  const handleSubmitSearch = (searchTerm) => {
    console.log('Search term in hook:', searchTerm)
    setFilterBy(searchTerm) // Continue to update filterBy for display purposes

    const results = searchTerm
      ? sounds.filter(
          (sound) =>
            sound.name.includes(searchTerm) ||
            sound.description.includes(searchTerm) ||
            sound.tags.includes(searchTerm)
        )
      : sounds

    setFilteredSounds(results)
  }

  return {
    filterBy,
    filteredSounds,
    // handleSearch,
    resetSearch,
    handleSubmitSearch,
  }
}
export default useSearch
