import { createContext, useState } from 'react'

export const ErrorContext = createContext()

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null)

  const clearError = (callback = null) => {
    setError(null)
    if (callback) {
      callback()
    }
  }

  return (
    <ErrorContext.Provider value={{ error, setError, clearError }}>
      {children}
    </ErrorContext.Provider>
  )
}
