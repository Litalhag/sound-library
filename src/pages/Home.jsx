import { useRef, useContext, useEffect, useState } from 'react'
import SoundList from '../components/SoundList'
import { SoundContext } from '../context/SoundContext'
import SearchBar from '../components/searchbar/SearchBar'
import ShowcaseContainer from '../components/showcase/ShowcaseContainer'
import Loader from '../components/Loader'
import Error from '../components/Error'
import { ErrorContext } from '../context/ErrorContext'
import { SearchContext } from '../context/SearchContext'
import { Fab } from '@mui/material'
import ArrowCircleUpRoundedIcon from '@mui/icons-material/ArrowCircleUpRounded'
import { scrollToRef } from '../utils/utils'
import HomeHeader from '../components/homeheader/HomeHeader'

const Home = () => {
  const { sounds, isLoading, fetchSound } = useContext(SoundContext)
  const { filterBy, filteredSounds } = useContext(SearchContext)
  const { error } = useContext(ErrorContext)
  const [showScroll, setShowScroll] = useState(false)
  const soundListRef = useRef(null)
  const homeRef = useRef(null)

  useEffect(() => {
    if (filteredSounds.length > 0) {
      scrollToRef(soundListRef)
    }
  }, [filteredSounds])

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 400) {
        setShowScroll(true)
      } else if (showScroll && window.pageYOffset <= 400) {
        setShowScroll(false)
      }
    }

    window.addEventListener('scroll', checkScrollTop)
    return () => window.removeEventListener('scroll', checkScrollTop)
  }, [showScroll])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
      <div ref={homeRef}>
        {showScroll && (
          <Fab
            color="primary"
            size="small"
            onClick={scrollToTop}
            style={{
              position: 'fixed',
              bottom: 20,
              right: 20,
              background: '#1c1e1e',
            }}
          >
            <ArrowCircleUpRoundedIcon />
          </Fab>
        )}
      </div>
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
