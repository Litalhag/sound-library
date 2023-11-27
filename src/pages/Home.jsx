import { useRef, useContext, useEffect, useState } from 'react'
import SoundList from '../components/SoundList'
import { SoundContext } from '../context/SoundContext'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import ShowcaseContainer from '../components/showcase/ShowcaseContainer'
import useSearch from '../hooks/useSearch'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { ErrorContext } from '../context/ErrorContext'
import { SearchContext } from '../context/SearchContext'

const Home = () => {
  const { sounds, isLoading, fetchSound } = useContext(SoundContext)
  const { error } = useContext(ErrorContext)
  const soundListRef = useRef(null)
  const { filterBy, filteredSounds } = useContext(SearchContext)

  useEffect(() => {
    if (filteredSounds.length > 0 && soundListRef.current) {
      soundListRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [filteredSounds])

  return (
    <main style={{ marginTop: '64px' }}>
      <SearchBar />

      <HomeHeader style={{ marginTop: '70px' }} />
      <ShowcaseContainer />

      {filterBy && (
        <div
          ref={soundListRef}
          style={{
            textAlign: 'center',
            margin: '20px 0',
            fontFamily: 'Roboto',
          }}
        >
          {filteredSounds.length === 0 ? (
            <h2>No results found for {filterBy}</h2>
          ) : (
            <h2>
              {filteredSounds.length} results for {filterBy}
            </h2>
          )}
        </div>
      )}

      {isLoading && <Loader />}
      {error && <Error onRetry={fetchSound} />}
      {sounds && (
        <SoundList
          id="soundList"
          sounds={filteredSounds.length > 0 ? filteredSounds : sounds}
        />
      )}
    </main>
  )
}
export default Home
