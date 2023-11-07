import React, { useContext, useState } from 'react'
import SoundCard from './SoundCard'
import { SoundContext } from '../context/SoundContext'
import SearchBar from './SearchBar'
import { searchSounds } from '../api/api'

const SoundList = () => {
  const { sounds, isLoading, error } = useContext(SoundContext)
  const [searchResults, setSearchResults] = useState([])
  const [isSearch, setIsSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  const resetSearch = () => {
    setSearchResults([])
    setIsSearch(false)
    setSearchTerm('')
  }

  const handleSearch = async (searchTerm) => {
    setIsSearch(true)
    try {
      const results = await searchSounds(searchTerm)
      setSearchResults(results)
      setIsSearch(false)
    } catch (searchError) {
      console.error('Search error:', searchError)
      setIsSearch(false)
    }
  }

  if (isLoading) {
    return <div>Loading sounds...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <main>
      <SearchBar
        onSearch={handleSearch}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onResetSearch={resetSearch}
      />
      {isSearch ? (
        searchResults.length > 0 ? (
          <div className="sound-list">
            {searchResults.map((sound) => (
              <SoundCard key={sound.id} sound={sound} />
            ))}
          </div>
        ) : (
          <div>No results found.</div>
        )
      ) : (
        Object.keys(sounds).map((type) => (
          <div key={type}>
            <h2>{type.charAt(0).toUpperCase() + type.slice(1)}s</h2>
            <div className="sound-list">
              {sounds[type].map((sound) => (
                <SoundCard key={sound.id} sound={sound} />
              ))}
            </div>
          </div>
        ))
      )}
    </main>
  )
}

export default SoundList
