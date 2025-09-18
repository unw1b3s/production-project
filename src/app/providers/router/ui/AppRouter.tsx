import { routerConfig } from 'app/providers/router/config/routerConfig'
import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

interface Props {
    // props
}

const AppRouter = (props: Props) => {
    return (
        <div>
	        <Suspense fallback={<div>Loader...</div>}>
		        <Routes>
			        {Object.values(routerConfig).map(({ element, path }) => (
								<Route key={path} path={path} element={
									<div className='page-wrapper'>
										{element}
									</div>
								}></Route>
			        ))}
		        </Routes>
	        </Suspense>
        </div>
    );
};

export default AppRouter;
