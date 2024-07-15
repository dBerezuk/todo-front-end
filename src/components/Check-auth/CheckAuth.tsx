import { routeUrls } from '@/config/routes.config';
import { getAuth } from '@/store/auth/auth.selectors';
import { PropsWithChildren, ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

interface ICheckAuth extends PropsWithChildren {
	isAuth?: boolean;
	isNotAuth?: boolean;
}

function CheckAuth({
	isAuth,
	isNotAuth,
	children
}: ICheckAuth): ReactNode | null {
	const { isAuth: userIsAuth } = useSelector(getAuth);

	if (isAuth) {
		return userIsAuth ? children : <Navigate to={routeUrls.LOGIN} />;
	}

	if (isNotAuth) {
		return userIsAuth ? <Navigate to={routeUrls.HOME} /> : children;
	}

	return children;
}

export default CheckAuth;
