import { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import Loading from '@/Ui/Loading/Loading';
import styles from './ButtonDefault.module.scss';

type TProps = {
	isLoading: boolean;
} & PropsWithChildren &
	ButtonHTMLAttributes<HTMLButtonElement>;

function ButtonDefault({
	isLoading,
	children,
	...rest
}: TProps): JSX.Element | null {
	return (
		<button className={styles.button} {...rest}>
			{isLoading ? <Loading /> : children}
		</button>
	);
}

export default ButtonDefault;
