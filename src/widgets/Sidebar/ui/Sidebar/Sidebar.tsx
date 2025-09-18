import type { ReactNode } from 'react'
import classNames from 'classnames';
import cls from './Sidebar.module.scss'

interface SidebarProps {
    className?: string,
    children: ReactNode,
}

const Sidebar = (props: SidebarProps) => {
const {
		className,
		children,
		...otherProps
	} = props
    return (
				<div
				className={classNames(className)}
					{...otherProps}
				>
        
        </div>
    );
};

export default Sidebar;
