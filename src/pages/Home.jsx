import { useRef, useContext, useEffect } from 'react'
import SoundList from '../components/SoundList'
import { SoundContext } from '../context/SoundContext'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import ShowcaseContainer from '../components/showcase/ShowcaseContainer'
import useSearch from '../hooks/useSearch'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { ErrorContext } from '../context/ErrorContext'

const Home = () => {
  const { sounds, isLoading, fetchSound } = useContext(SoundContext)
  const { error } = useContext(ErrorContext)
  const soundListRef = useRef(null)
  const {
    filterBy,
    filteredSounds,
    handleSearch,
    resetSearch,
    handleSubmitSearch,
  } = useSearch(soundListRef)

  return (
    <main style={{ marginTop: '64px' }}>
      <SearchBar
        handleSearch={handleSearch}
        searchTerm={filterBy.text}
        onResetSearch={resetSearch}
        handleSubmitSearch={handleSubmitSearch}
      />

      <HomeHeader style={{ marginTop: '70px' }} />
      <ShowcaseContainer />

      {filterBy.text && (
        <div
          ref={soundListRef}
          style={{ textAlign: 'center', margin: '20px 0' }}
        >
          <h2>
            {filteredSounds.length} results for {filterBy.text}
          </h2>
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
