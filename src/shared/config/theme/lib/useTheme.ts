import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './themeContext'

export type ToggleTheme = () => void

interface useThemeResult {
	theme: Theme
	toggleTheme: ToggleTheme
}

export function useTheme (): useThemeResult  {
  const { theme, setTheme } = useContext(ThemeContext)
	
  const toggleTheme = () => {
    const newTheme = (theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    setTheme(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }
	
  return { toggleTheme, theme }
}
