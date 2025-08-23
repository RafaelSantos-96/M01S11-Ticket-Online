import { Link } from 'react-router-dom'
import './Logo.css'

const Logo = ({ size = 'medium' }) => {
  return (
    <Link to="/" className={`logo logo--${size}`}>
      {/* TODO: Substituir por sua imagem de logo */}
      {/* <img src="/logo.png" alt="Ticket Online" className="logo__image" /> */}
      <div className="logo__text">
        <span className="logo__ticket">Cine</span>
        <span className="logo__online">Online</span>
      </div>
    </Link>
  )
}

export default Logo