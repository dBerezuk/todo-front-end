import { ButtonHTMLAttributes } from 'react';
import styles from './Item.module.scss';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	label: string;
}

function Item({ label, ...rest }: IProps): JSX.Element | null {
	return (
		<li className={styles.item}>
			<button type="button" {...rest}>
				<span>{label}</span>
			</button>
		</li>
	);
}

export default Item;
