import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SoundProvider } from './context/SoundContext'
// import { AuthContext } from './context/AuthContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <SoundProvider>
        <App />
      </SoundProvider>
    </AuthProvider>
  </React.StrictMode>
)
