import axios from 'axios'
import { QUERY_TYPES } from './constants'

const BASE_URL = import.meta.env.VITE_BASE_URL
// console.log(BASE_URL)
const API_KEY = import.meta.env.VITE_API_KEY
// console.log(API_KEY)
const FIELDS =
  'fields=id,name,tags,description,type,created,duration,download,previews,images'
// console.log(FIELDS)

const request = async (method, endpoint, data = null) => {
  const res = await axios({
    method,
    url: `${BASE_URL}/${endpoint}`,
    data,
  })
  // each query is an object with a results array
  return res.data.results
}

export const getAllSounds = async () => {
  try {
    const promises = QUERY_TYPES.map((queryType) => {
      const endpoint = `?query=${queryType}&${FIELDS}&token=${API_KEY}`
      return request('get', endpoint)
    })

    const res = await Promise.all(promises)
    const rawDatas = []
    res.forEach((arr) => rawDatas.push(...arr))
    return _clearSounds(rawDatas)
  } catch (error) {
    console.log(error)
  }
}

function _clearSounds(rawDatas) {
  const dirtySounds = rawDatas
  // console.log(dirtySounds)
  return dirtySounds.map((dirtySound) => {
    return {
      id: dirtySound.id,
      name: dirtySound.name,
      description: dirtySound.description,
      tags: dirtySound.tags,
      type: dirtySound.type,
      created: dirtySound.created,
      duration: dirtySound.duration,
      downloadUrl: dirtySound.download,
      previewSound: dirtySound.previews['preview-hq-mp3'],
      imageUrl: dirtySound.images.waveform_bw_m,
    }
  })
}

export const getSoundById = async (soundId) => {
  if (!soundId) {
    console.error('Invalid sound ID:', soundId)
    return null
  }
  try {
    const endpoint = `https://freesound.org/apiv2/sounds/${soundId}/?${FIELDS}&token=${API_KEY}`
    const response = await axios.get(endpoint)
    // i use _clearSounds to format the sound data as i did with getAllSounds function
    const formattedSound = _clearSounds([response.data])
    // Wrap in an array to use _clearSounds
    return formattedSound[0]
    // _clearSounds returns an array, so i take the first element
  } catch (error) {
    console.error(`Error fetching sound details for ID ${soundId}: `, error)
    return null
  }
}

// new download function
export const downloadSound = async (sound) => {
  if (!sound || !sound.downloadUrl) {
    console.error('Invalid sound or download URL not found')
    return
  }

  try {
    const downloadUrl = `${sound.downloadUrl}?token=${API_KEY}`
    const response = await axios.get(downloadUrl, { responseType: 'blob' })

    const url = window.URL.createObjectURL(new Blob([response.data]))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${sound.name}.mp3`)
    document.body.appendChild(link)
    link.click()

    document.body.removeChild(link)
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error downloading sound:', error)
  }
}
