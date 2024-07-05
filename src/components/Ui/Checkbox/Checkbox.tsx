import { forwardRef } from 'react';

import { TFieldCheckbox } from '@/types/fields.types';
import styles from './Checkbox.module.scss';

const Checkbox = forwardRef<HTMLInputElement, TFieldCheckbox>(
	({ label, ...rest }, ref): JSX.Element | null => {
		return (
			<label className={styles.checkbox}>
				<input className={styles.input} type="checkbox" ref={ref} {...rest} />
				<span className={styles.emulator}></span>
				<span className={styles.label}>{label}</span>
			</label>
		);
	}
);

export default Checkbox;
