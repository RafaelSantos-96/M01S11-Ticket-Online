import { IconButton, Tooltip } from '@mui/material'
import { LightMode, DarkMode } from '@mui/icons-material'
import { useTheme } from '../../../contexts/ThemeContext'
import './ThemeToggle.css'

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <Tooltip title={isDarkMode ? 'Alternar para tema claro' : 'Alternar para tema escuro'}>
      <IconButton
        onClick={toggleTheme}
        className="theme-toggle"
        aria-label={isDarkMode ? 'Alternar para tema claro' : 'Alternar para tema escuro'}
      >
        {isDarkMode ? (
          <LightMode className="theme-toggle__icon theme-toggle__icon--light" />
        ) : (
          <DarkMode className="theme-toggle__icon theme-toggle__icon--dark" />
        )}
      </IconButton>
    </Tooltip>
  )
}

export default ThemeToggle