import { NavLink } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const navItems = [
    { to: '/', label: 'Início' },
    { to: '/filmes', label: 'Filmes' },
    { to: '/contato', label: 'Contato' }
  ]

  return (
    <nav className="navigation">
      <ul className="navigation__list">
        {navItems.map((item) => (
          <li key={item.to} className="navigation__item">
            <NavLink 
              to={item.to} 
              className={({ isActive }) => 
                isActive ? 'navigation__link navigation__link--active' : 'navigation__link'
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navigation