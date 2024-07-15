import { PropsWithChildren } from 'react';
import { Link as RouteLink } from 'react-router-dom';

import styles from './Link.module.scss';

type TProps = {
	path: string;
} & PropsWithChildren;

function Link({ path, children }: TProps): JSX.Element | null {
	return (
		<RouteLink className={styles.link} to={path}>
			{children}
		</RouteLink>
	);
}

export default Link;
