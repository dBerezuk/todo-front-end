import { JSX } from 'react';

import Home from '@/pages/Home/Home.tsx';

interface IRoutes {
	path: string;
	element: JSX.Element | null;
}

const routes: IRoutes[] = [
	{
		path: '/',
		element: <Home />
	}
];

export default routes;
