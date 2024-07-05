import cn from 'classnames';
import { forwardRef } from 'react';

import { TFieldDefault } from '@/types/fields.types.ts';

import styles from './../Fields.module.scss';

const FieldDefault = forwardRef<HTMLInputElement, TFieldDefault>(
	({ label, fieldName, placeholder, error, ...rest }, ref): JSX.Element => {
		return (
			<div className={styles.field}>
				<label htmlFor={fieldName}>{label}</label>
				<div className={styles.box}>
					<input
						className={cn(styles.input, { [styles.error]: error })}
						id={fieldName}
						placeholder={placeholder}
						ref={ref}
						{...rest}
					/>
				</div>
				{/* {error && <span>ошибка</span>} */}
			</div>
		);
	}
);

export default FieldDefault;
