import { Outlet } from 'react-router-dom'
import Header from '../../organisms/Header/Header'
import Footer from '../../organisms/Footer/Footer'
import './MainTemplate.css'

const MainTemplate = () => {
  return (
    <div className="main-template">
      <Header />
      <main className="main-template__content">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainTemplate