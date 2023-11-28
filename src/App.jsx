import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Home from './pages/Home'
import Contact from './pages/contact/Contact'
import ErrorPage from './pages/ErrorPage'
import SharedLayout from './components/SharedLayout'
import About from './pages/about/About'
import { ProtectedRoute } from './components/ProtectedRoute'
import UserProfile from './pages/UserProfile'
import Article from './components/article/Article'

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
        path: 'user-profile',
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: 'article/:articleId',
        element: <Article />,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer position="bottom-left" />
    </>
  )
}

export default App
