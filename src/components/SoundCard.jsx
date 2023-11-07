const SoundCard = ({ sound }) => {
  const onSaveSound = (soundId) => {
    console.log(soundId)
  }
  return (
    <div className="sound-card">
      <h2>{sound.name}</h2>
      <img src={sound.imageUrl} alt={`Waveform for ${sound.name}`} />
      <p>{sound.description}</p>
      <div className="sound-tags">
        {sound.tags.map((tag) => (
          <span key={tag} className="sound-tag">
            {tag}
          </span>
        ))}
      </div>
      <p>Type: {sound.type}</p>
      <p>Created: {sound.created}</p>
      <p>Duration: {sound.duration}</p>
      <audio controls>
        <source src={sound.previewSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <a
        title="Download link"
        href={sound.downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download
      </a>
      <button onClick={() => onSaveSound(sound.id)}>Save Sound</button>
    </div>
  )
}

export default SoundCard
