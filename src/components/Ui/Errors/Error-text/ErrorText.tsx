import { TFieldDefault } from '@/types/fields.types';

import styles from './ErrorText.module.scss';

function ErrorText({
	error
}: Pick<TFieldDefault, 'error'>): JSX.Element | undefined | null {
	return (
		error && (
			<span
				className={styles.error}
				role="status"
				aria-live="polite"
				aria-atomic="true"
			>
				{error.message}
			</span>
		)
	);
}

export default ErrorText;
