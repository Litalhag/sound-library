import { Outlet } from 'react-router-dom'
import NavHead from './navbars/NavHead'
import Footer from './Footer'

const SharedLayout = () => {
  return (
    <>
      <NavHead />

      <Outlet />

      <Footer />
    </>
  )
}
export default SharedLayout
