import { createContext, useState, useEffect } from 'react'

import { getAllSounds } from '../api/api'

import { QUERY_TYPES } from '../api/constants'

export const SoundContext = createContext()

export const SoundProvider = ({ children }) => {
  const [sounds, setSounds] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchSound = async () => {
    try {
      const soundData = await getAllSounds()
      // console.log(soundData)
      setSounds(soundData)
      setIsLoading(false)
    } catch (err) {
      setError(err.message)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchSound()
  }, [])

  // const addNewShoe = async (shoe) => {
  //   try {
  //     const newShoe = await addShoe(shoe)
  //     setShoes((prevShoes) => [...prevShoes, newShoe])
  //     showToast('Shoe added successfully')
  //   } catch (err) {
  //     setError(err.message)
  //   }
  //}

  // const editShoe = async (shoeData) => {
  //   try {
  //     const updatedShoe = await updateShoe(shoeData, shoeData.id)
  //     setShoes((prevShoes) =>
  //       prevShoes.map((shoe) => (shoe.id === shoeData.id ? updatedShoe : shoe))
  //     )
  //     showToast('Shoe updated successfully')
  //   } catch (err) {
  //     setError(err.message)
  //   }
  // }

  // const removeShoe = async (id) => {
  //   try {
  //     await deleteShoe(id)
  //     setShoes((prevShoes) => prevShoes.filter((shoe) => shoe.id !== id))
  //     showToast('Shoe deleted successfully')
  //   } catch (err) {
  //     setError(err.message)
  //   }
  // }

  const clearError = () => {
    setError(null)
  }

  // const showToast = (message) => {
  //   toast.success(message, {
  //     position: 'top-center',
  //     autoClose: 5000,
  //     hideProgressBar: false,
  //     closeOnClick: true,
  //     pauseOnHover: true,
  //     draggable: false,
  //     progress: undefined,
  //   })
  // }
  return (
    <SoundContext.Provider
      value={{
        sounds,
        isLoading,
        error,
        // addNewSound,
        // removeSound,
        clearError,
      }}
    >
      {children}
    </SoundContext.Provider>
  )
}
