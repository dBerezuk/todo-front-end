import { LogOut } from 'lucide-react';

import Loading from '@/Ui/Loading/Loading';
import useButtonLogout from './useButtonLogout';

import styles from './ButtonLogout.module.scss';

function ButtonLogout(): JSX.Element | null {
	const { onLogout, isActionLoading } = useButtonLogout();

	return (
		<button className={styles.button} onClick={onLogout}>
			{isActionLoading ? <Loading /> : <LogOut />}
		</button>
	);
}

export default ButtonLogout;
