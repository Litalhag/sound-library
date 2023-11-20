import { useState, useEffect, useContext } from 'react'
import SoundList from '../components/SoundList'
import { SoundContext } from '../context/SoundContext'
import { AuthContext } from '../context/AuthContext'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import ShowcaseContainer from '../components/showcase/ShowcaseContainer'
import useSearch from '../hooks/useSearch'

const Home = () => {
  const { user } = useContext(AuthContext)
  const { sounds } = useContext(SoundContext)
  const [searchQuery, setSearchQuery] = useState('')
  const { filteredSounds, handleSearch, resetSearch } = useSearch()
  // const [filteredSounds, setFilteredSounds] = useState([])
  // const [filterBy, setFilterBy] = useState({ text: '' })

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

  // useEffect(() => {
  //   if (filterBy.text) {
  //     // Scroll to the sound list when there are filtered results
  //     document
  //       .getElementById('soundList')
  //       .scrollIntoView({ behavior: 'smooth' })
  //   }
  // }, [filteredSounds, filterBy.text])

  // // replaced the target with string:
  // const onHandleSearch = (searchValue) => {
  //   console.log('value:', searchValue)
  //   setFilterBy((prevFilterBy) => ({ ...prevFilterBy, text: searchValue }))
  //   setSearchQuery(searchValue)
  //   if (searchValue.trim()) {
  //     document
  //       .getElementById('soundList')
  //       .scrollIntoView({ behavior: 'smooth' })
  //   }
  //   if (searchValue.trim()) {
  //     document
  //       .getElementById('soundList')
  //       .scrollIntoView({ behavior: 'smooth' })
  //   }
  // }

  // const onResetSearch = () => {
  //   setFilterBy({ ...filterBy, text: '' })
  //   setSearchQuery('')
  // }
  const onHandleSearch = (searchValue) => {
    handleSearch(searchValue)
    setSearchQuery(searchValue)
    if (searchValue.trim()) {
      document
        .getElementById('soundList')
        .scrollIntoView({ behavior: 'smooth' })
    }
  }

  const onResetSearch = () => {
    resetSearch()
    setSearchQuery('')
  }

  return (
    <main style={{ marginTop: '64px' }}>
      {/* <input
        type="text"
        placeholder="Search sound"
        onChange={onHandleSearch}
        value={filterBy.text}
      ></input> */}
      <SearchBar
        searchTerm={searchQuery}
        setSearchTerm={setSearchQuery}
        onSearch={onHandleSearch}
        onResetSearch={onResetSearch}
      />

      <HomeHeader style={{ marginTop: '70px' }} />
      <ShowcaseContainer />
      {searchQuery && (
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h2>
            {filteredSounds.length} results for {searchQuery}
          </h2>
        </div>
      )}

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
