import moment from 'moment';

import Logo from '@/Ui/Logo/Logo.tsx';

import hello from '@/utils/hello';

import styles from './Header.module.scss';

function Header(): JSX.Element | null {
	return (
		<header className={styles.header}>
			<Logo />
			<div className={styles.body}>
				<b>{hello()} 👋</b>
				<time dateTime={moment().format()}>{moment().format('LL')}</time>
			</div>
		</header>
	);
}

export default Header;
