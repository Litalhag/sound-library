import { useContext } from 'react'
import SoundCard from './SoundCard'
import { SoundContext } from '../context/SoundContext'

const SoundList = ({ sounds }) => {
  const { removeSound } = useContext(SoundContext)
  return (
    <div id="soundList">
      {sounds.map((sound) => (
        <SoundCard key={sound.id} sound={sound} />
      ))}
    </div>
  )
}
export default SoundList
