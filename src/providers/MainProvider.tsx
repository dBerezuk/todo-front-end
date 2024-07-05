import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import store from '@/store';
import routes from './../config/routes.config.tsx';

import Layout from '@/Layout/Layout.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: routes
	}
]);

function MainProvider(): JSX.Element {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
}

export default MainProvider;
