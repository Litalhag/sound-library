import { useState, useEffect, useContext } from 'react'
import SoundList from '../components/SoundList'
import { SoundContext } from '../context/SoundContext'
import SignIn from '../googleSigning/signIn'
import { AuthContext } from '../context/AuthContext'
import HomeHeader from '../components/HomeHeader'
import SearchBar from '../components/SearchBar'
import ShowcaseContainer from '../components/showcase/ShowcaseContainer'

const Home = () => {
  const [filterBy, setFilterBy] = useState({ text: '' })
  const [filteredSounds, setFilteredSounds] = useState([])
  const { sounds, isLoading, error } = useContext(SoundContext)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    if (filterBy.text) {
      setFilteredSounds(
        sounds.filter((sound) => {
          return (
            sound.name.includes(filterBy.text) ||
            sound.description.includes(filterBy.text) ||
            sound.tags.includes(filterBy.text)
          )
        })
      )
    }
  }, [filterBy, sounds])

  const onHandleSearch = ({ target }) => {
    const { value } = target
    console.log('value:', value)
    setFilterBy((prevFilterBy) => ({ ...prevFilterBy, text: value }))
  }

  const onResetSearch = () => {
    setFilterBy({ ...filterBy, text: '' })
  }

  return (
    <main style={{ marginTop: '64px' }}>
      {/* <input
        type="text"
        placeholder="Search sound"
        onChange={onHandleSearch}
        value={filterBy.text}
      ></input> */}
      <SearchBar />
      <HomeHeader style={{ marginTop: '70px' }} />
      <ShowcaseContainer />

      <SoundList sounds={filterBy.text ? filteredSounds : sounds} />
      {!user && <SignIn />}
    </main>
  )
}
export default Home
