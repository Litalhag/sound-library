import { useContext, useEffect } from 'react'
import './App.css'
import SoundList from './components/SoundList'
import Home from './pages/Home'
import SignIn from './googleSigning/signIn'
import { AuthContext } from './context/AuthContext'

function App() {
  const { login, loadUserToLocalStorage } = useContext(AuthContext)

  useEffect(() => {
    loadUserToLocalStorage()
  }, [])

  return (
    <>
      {/* <button onClick={login}>Login</button> */}
      {/* <Home /> */}
      <SoundList />
      <SignIn />
    </>
  )
}

export default App
