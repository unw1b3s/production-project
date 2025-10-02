import classNames from 'classnames'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import cls from './Button.module.scss'

export enum ThemeButton {
	CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
		theme?: ThemeButton,
    children: ReactNode,
}

const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    theme,
    ...otherProps
  } = props
  return (
				<button
				className={classNames(cls.button, cls[theme], className)}
					{...otherProps}
				>
					{children}
				</button>
  );
};

export default Button;
