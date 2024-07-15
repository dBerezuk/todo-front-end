import Link from '@/Ui/Link/Link';

import { routeUrls } from '@/config/routes.config';

import styles from './Footer.module.scss';

type IProps = { isType: boolean };

function Footer({ isType }: IProps) {
	return (
		<footer className={styles.footer}>
			<p>
				{isType ? (
					<>
						Уже есть аккаунт ?
						<Link path={routeUrls.LOGIN} children="Login" />
					</>
				) : (
					<>
						Ещё нет аккаунта ?
						<Link path={routeUrls.REGISTRATION} children="Register" />
					</>
				)}
			</p>
		</footer>
	);
}

export default Footer;
