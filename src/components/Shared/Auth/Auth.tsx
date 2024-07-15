// TODO: на back-end сделать валидацию для password_repeat

import ButtonDefault from '@/Ui/Buttons/Button-defaut/ButtonDefault';
import Footer from './Footer/Footer';

import { IAuthProps } from '@/types/auth.types';

import useAppSelector from '@/hooks/redux/useAppSelector';
import { getAuth } from '@/store/auth/auth.selectors';
import styles from './Auth.module.scss';

function Auth({ type, onSubmit, children }: IAuthProps) {
	const isType = type === 'registration';

	const { isActionLoading } = useAppSelector(getAuth);

	return (
		<>
			<h1 className="visually-hidden">Auth</h1>
			<section className={styles.auth}>
				<form className={styles.form} onSubmit={onSubmit} noValidate>
					<div className={styles.body}>
						<h2>{isType ? 'Registration' : 'Login'}</h2>
						<div>{children}</div>
						<ButtonDefault
							isLoading={isActionLoading}
							children={isType ? 'Register' : 'Login'}
							type="submit"
						/>
					</div>
					<Footer isType={isType} />
				</form>
			</section>
		</>
	);
}

export default Auth;
