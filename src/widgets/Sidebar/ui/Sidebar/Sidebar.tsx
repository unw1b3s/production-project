import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { type ReactNode, useState } from 'react'
import classNames from 'classnames';
import { DarkIcon, LightIcon } from 'shared/assets/icons'
import { Theme, useTheme } from 'shared/config/theme'
import { Button } from 'shared/ui/Button'
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string,
    children?: ReactNode,
}

const Sidebar = (props: SidebarProps) => {
const {
		className,
		children,
		...otherProps
	} = props
	const [collapsed, setCollapsed] = useState(false)
	
	const onToggle = () => {
		setCollapsed(prev => !prev)
	}
	
	return (
				<div
				className={classNames(className, cls.sidebar, {
					[cls.collapsed]: collapsed
				})}
					{...otherProps}
				>
					<div className={classNames(cls.toggleOpenSidebar)}>
						<Button onClick={onToggle}>
							toggle
						</Button>
					</div>
					<div className={cls.switcher}>
						<ThemeSwitcher/>
					</div>
					
        </div>
    );
};

export default Sidebar;
