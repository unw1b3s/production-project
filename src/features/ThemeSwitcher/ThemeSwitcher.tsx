import classNames from 'classnames'
import { DarkIcon, LightIcon } from 'shared/assets/icons'
import { Theme } from 'shared/config/theme'
import {useTheme } from 'shared/config/theme/lib/useTheme'
import { Button, ThemeButton } from 'shared/ui/Button'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string,
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme()

  return (
		    <Button
			    className={classNames(cls.themeSwitcher, className)}
			    theme={ThemeButton.CLEAR}
			    onClick={toggleTheme}
		    >
			    {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/> }
		    </Button>
  );
};
