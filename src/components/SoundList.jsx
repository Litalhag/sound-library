import SoundCard from './SoundCard'

const SoundList = ({ sounds }) => {
  return (
    <div className="sound-list">
      {sounds.map((sound) => (
        <SoundCard key={sound.id} sound={sound} />
      ))}
    </div>
  )
}
export default SoundList
