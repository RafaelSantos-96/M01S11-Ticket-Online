import { createContext, useContext, useState, useEffect } from 'react'

// Criação do Context
const ThemeContext = createContext()

// Hook personalizado para usar o tema
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme deve ser usado dentro de um ThemeProvider')
  }
  return context
}

// Provider do tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Verificar se há preferência salva no localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('ticketonline-theme')
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark')
    } else {
      // Verificar preferência do sistema
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(prefersDark)
    }
  }, [])

  // Aplicar o tema no documento e salvar no localStorage
  useEffect(() => {
    const root = document.documentElement
    if (isDarkMode) {
      root.setAttribute('data-theme', 'dark')
      localStorage.setItem('ticketonline-theme', 'dark')
    } else {
      root.setAttribute('data-theme', 'light')
      localStorage.setItem('ticketonline-theme', 'light')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const value = {
    isDarkMode,
    toggleTheme,
    theme: isDarkMode ? 'dark' : 'light'
  }

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}