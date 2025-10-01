import './styles/index.scss';
import { AppRouter } from 'app/providers/router'
import classNames from 'classnames'
import { useTheme } from 'shared/config/theme'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', theme)}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};
