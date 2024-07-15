import { routeUrls } from '@/config/routes.config';
import { Link } from 'react-router-dom';

function Logo() {
	return (
		<Link to={routeUrls.HOME}>
			<img src="/images/logo.svg" width={150} height={49} alt="todo" />
		</Link>
	);
}

export default Logo;
