import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import Contact from './pages/Contact'
import Error from './pages/Error'
import SharedLayout from './components/SharedLayout'
import { About } from './pages/About'

const router = createBrowserRouter([
  {
    path: '/',
    element: <SharedLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <Error />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
