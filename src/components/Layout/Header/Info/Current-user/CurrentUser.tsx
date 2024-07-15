import useAppSelector from '@/hooks/redux/useAppSelector';
import { getAuth } from '@/store/auth/auth.selectors';
import styles from './CurrentUser.module.scss';

function CurrentUser(): JSX.Element | null {
	const { user } = useAppSelector(getAuth);

	const [char, ...email] = user.email || [];

	return user.email ? (
		<div className={styles.email}>
			<div className={styles.char}>{char}</div>
			<span>{email}</span>
		</div>
	) : null;
}

export default CurrentUser;
