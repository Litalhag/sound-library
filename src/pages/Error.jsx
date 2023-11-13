import React from 'react'

const Error = ({
  message = 'The page you are looking for does not exist.',
}) => {
  return (
    <div className="error">
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  )
}

export default Error
