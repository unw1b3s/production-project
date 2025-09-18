import {Counter} from "../component/Counter";
import '../styles/index.scss'
import { Link, Route, Routes } from 'react-router-dom'
import { classNames } from '../helpers/classNames/classNames'
import {MainPageAsync} from "../pages/MainPage/MainPage.async";
import {AboutPageAsync} from "../pages/AboutPage/AboutPageAsync";
import { Suspense } from 'react'
import { useTheme } from '../theme/useTheme'

export function App() {
  const {theme, toggleTheme} = useTheme()
   
    return (
        <div className={classNames('app', {}, [theme]) }>
            <footer>
                <ul>
                    <li><Link to="/">Main</Link>
                    </li>
                    <li><Link to="/about">about</Link>
                    </li>
                    <li><Link to="/counter">counter</Link>
                    </li>
                </ul>
              <hr/>
              <button onClick={toggleTheme}>Toggle Theme</button>
            </footer>
            <hr/>
            <Suspense fallback={<div>Loader...</div>}>
                <Routes>
                    <Route path="/" element={<MainPageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                    <Route path="/counter" element={<Counter/>}/>
                </Routes>
            </Suspense>
        </div>
    );
}