import { useContext } from 'react'
import { ErrorContext } from '../context/ErrorContext'
import { Alert, AlertTitle, Button } from '@mui/material'

const Error = ({ onRetry }) => {
  const { error, clearError } = useContext(ErrorContext)

  const handleRetry = () => {
    clearError(onRetry)
  }
  console.log('Error:', error)
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '20vh',
      }}
    >
      <Alert severity="error">
        <AlertTitle>Error</AlertTitle>
        Something went wrong on our end: <strong>{error.message}</strong>
      </Alert>
      <Button
        size="small"
        color="error"
        onClick={handleRetry}
        style={{ marginTop: '20px' }}
      >
        Try Again
      </Button>
    </div>
  )
}
export default Error
