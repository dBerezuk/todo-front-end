import ButtonLogout from './Button-logout/ButtonLogout';
import CurrentUser from './Current-user/CurrentUser';
import styles from './Info.module.scss';

function Info(): JSX.Element | null {
	return (
		<div className={styles.info}>
			<CurrentUser />
			<ButtonLogout />
		</div>
	);
}

export default Info;
