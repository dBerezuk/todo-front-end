import cn from 'classnames';
import { Command, Plus } from 'lucide-react';

import styles from './Button.module.scss';

interface IProps {
	label: string,
	onClick: () => void;
	isVisible: boolean;
}

function Button({ label, onClick, isVisible }: IProps): JSX.Element | null {
	return (
		<button className={cn(styles.button, { [styles.visible]: isVisible })} onClick={onClick}>
			<span className={styles.icon}>
				<Plus size={18} />
			</span>
			<span className={styles.label}>
				{label}
			</span>
			<kbd>
				<Command size={16} />
			</kbd>
			<kbd>
				Z
			</kbd>
		</button>
	);
}

export default Button;