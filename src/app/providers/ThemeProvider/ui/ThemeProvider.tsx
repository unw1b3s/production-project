import { ReactNode, useMemo, useState } from 'react'
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from 'shared/config/theme'


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
	children?: ReactNode
}

export function ThemeProvider ({children}: ThemeProviderProps) {
	const [theme, setTheme] = useState<Theme>(defaultTheme)
	
	const defaultProps = useMemo(() => ({
		theme: theme,
		setTheme: setTheme
	}), [theme])
	
	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	)
}


