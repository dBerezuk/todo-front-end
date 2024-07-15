import moment from 'moment';

import { getAuth } from '@/store/auth/auth.selectors';

import Logo from '@/Ui/Logo/Logo.tsx';

import hello from '@/utils/hello';

import useAppSelector from '@/hooks/redux/useAppSelector';
import styles from './Header.module.scss';
import Info from './Info/Info';

function Header(): JSX.Element | null {
	const { isAuth } = useAppSelector(getAuth);

	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.body}>
				<b>{hello()} 👋</b>
				<time dateTime={moment().format()}>{moment().format('LL')}</time>
			</div>
			{isAuth && <Info />}
		</header>
	);
}

export default Header;
