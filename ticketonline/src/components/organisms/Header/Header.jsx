import Logo from '../../atoms/Logo/Logo'
import Navigation from '../../molecules/Navigation/Navigation'
import ThemeToggle from '../../atoms/ThemeToggle/ThemeToggle'
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo size="medium" />
        <div className="header__right">
          <Navigation />
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

export default Header