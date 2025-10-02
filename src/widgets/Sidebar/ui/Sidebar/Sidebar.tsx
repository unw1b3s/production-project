import { ThemeSwitcher } from 'features/ThemeSwitcher'
import { useState } from 'react'
import classNames from 'classnames';
import { Button } from 'shared/ui/Button'
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss'
import { LangSwitcher } from 'widgets/LangSwitcher';

interface SidebarProps {
    className?: string,
}

const Sidebar = (props: SidebarProps) => {
  const {
    className,
    ...otherProps
  } = props
  const { t } = useTranslation();
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
							{t('sidebar.toggle')}
						</Button>
					</div>
          <LangSwitcher />
					<div className={cls.switcher}>
						<ThemeSwitcher/>
					</div>

        </div>
  );
};

export default Sidebar;
