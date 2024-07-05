import { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.scss';

function Button({
	...rest
}: ButtonHTMLAttributes<HTMLButtonElement>): JSX.Element | null {
	return (
		<button className={styles.button} type="button" {...rest}>
			<span className="visually-hidden">Open action task</span>
		</button>
	);
}

export default Button;
