import { JSX } from 'react';

import Home from '@/pages/Home/Home.tsx';
import Login from '@/pages/Login/Login';
import Registration from '@/pages/Registration/Registration';

export enum routeUrls {
	HOME = '/',
	LOGIN = '/login',
	REGISTRATION = '/registration'
}

interface IRoutes {
	path: string;
	element: JSX.Element | null;
	isAuth?: boolean;
	isNotAuth?: boolean;
}

const routes: IRoutes[] = [
	{
		path: routeUrls.HOME,
		element: <Home />,
		isAuth: true
	},
	{
		path: routeUrls.LOGIN,
		element: <Login />,
		isNotAuth: true
	},
	{
		path: routeUrls.REGISTRATION,
		element: <Registration />,
		isNotAuth: true
	}
];

export default routes;
