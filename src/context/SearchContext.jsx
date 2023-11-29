import { createContext, useCallback, useContext, useState } from 'react'
import { SoundContext } from './SoundContext'

export const SearchContext = createContext()

export const SearchProvider = ({ children }) => {
  const [filterBy, setFilterBy] = useState('')
  const [filteredSounds, setFilteredSounds] = useState([])
  const { sounds } = useContext(SoundContext)

  const resetSearch = useCallback(() => {
    console.log('Resetting search')
    setFilterBy('')
    setFilteredSounds([])
  }, [])

  const handleSubmitSearch = (searchTerm) => {
    console.log('Search term in hook:', searchTerm)
    setFilterBy(searchTerm)

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

  return (
    <SearchContext.Provider
      value={{ filterBy, filteredSounds, resetSearch, handleSubmitSearch }}
    >
      {children}
    </SearchContext.Provider>
  )
}
