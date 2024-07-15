import cn from 'classnames';
import { Loader, LucideProps } from 'lucide-react';

import styles from './Loading.module.scss';

function Loading({
	size = 24,
	className,
	...rest
}: LucideProps): JSX.Element | null {
	return (
		<Loader className={cn(styles.loader, className)} size={size} {...rest} />
	);
}

export default Loading;
