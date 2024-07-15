/* eslint-disable no-mixed-spaces-and-tabs */
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import store from '@/store';

import Layout from '@/Layout/Layout.tsx';

import CheckAuth from '@/components/Check-auth/CheckAuth';
import routes from '@/config/routes.config';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: routes.map(route => ({
			...route,
			element: (
				<CheckAuth
					isAuth={route.isAuth}
					isNotAuth={route.isNotAuth}
					children={route.element}
				/>
			)
		}))
	}
]);

function MainProvider(): JSX.Element {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
			<ToastContainer />
		</Provider>
	);
}

export default MainProvider;
