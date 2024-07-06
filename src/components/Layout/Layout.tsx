import { Outlet } from 'react-router-dom';

import Header from './Header/Header.tsx';

function Layout(): JSX.Element | null {
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
