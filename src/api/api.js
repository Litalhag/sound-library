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
  return res.data
}

export const getAllSounds = async (queryType = QUERY_TYPES[0]) => {
  try {
    const endpoint = `?query=${queryType}&${FIELDS}&token=${API_KEY}`

    const rawData = await request('get', endpoint)
    return clearSounds(rawData)
  } catch (error) {
    console.log(error)
  }
}

function clearSounds(rawData) {
  const dirtySounds = rawData.results
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

// export const searchSounds = async (searchTerm) => {
//   const endpoint = `${BASE_URL}?query=${searchTerm}`
//   console.log('endpoint:', endpoint)

//   try {
//     const rawData = await request('get', BASE_URL + endpoint)
//     return clearSounds(rawData)
//   } catch (error) {
//     console.error('Error searching sounds:', error)
//     throw error
//   }
// }

// export const searchSounds = async (searchTerm) => {
//   const encodedSearchTerm = encodeURIComponent(searchTerm)
//   const endpoint = `/search/text/?query=${encodedSearchTerm}${FIELDS}&token=${API_KEY}`
//   const rawData = await request('get', endpoint)
//   return clearSounds(rawData)
// }

// export const getShoe = async (shoeId) => {
//   return await request('get', `/${shoeId}`)
// }

// export const updateShoe = async (shoe, shoeId) => {
//   return await request('put', `/${shoeId}`, shoe)
// }

// export const addShoe = async (shoe) => {
//   return await request('post', '/', shoe)
// }

// export const deleteShoe = async (shoeId) => {
//   return await request('delete', `/${shoeId}`)
// }
