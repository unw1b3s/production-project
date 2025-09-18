import type { RouterProps } from 'react-router-dom'

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about'
}

export const RouterPath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: '/',
	[AppRoutes.ABOUT]: '/about',
}

export const routerConfig: Record<AppRoutes, RouterProps> = {
	
}