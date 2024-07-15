import useActions from '@/hooks/redux/useActions.ts';
import useAppSelector from '@/hooks/redux/useAppSelector.ts';
import { getAuth } from '@/store/auth/auth.selectors.ts';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header.tsx';

function Layout(): JSX.Element | null {
	const { isAuth } = useAppSelector(getAuth);
	const { getUser } = useActions();

	useEffect(() => {
		isAuth && getUser();
	}, [isAuth, getUser]);

	return (
		<div className="container">
			<Header />
			<main>
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
