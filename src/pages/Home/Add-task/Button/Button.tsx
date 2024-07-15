import cn from 'classnames';
import { Command, Plus } from 'lucide-react';

import Loading from '@/Ui/Loading/Loading';
import styles from './Button.module.scss';

interface IProps {
	label: string;
	onClick: () => void;
	isVisible: boolean;
	isLoading?: boolean;
}

function Button({
	label,
	onClick,
	isVisible,
	isLoading
}: IProps): JSX.Element | null {
	return (
		<button
			className={cn(styles.button, { [styles.visible]: isVisible })}
			onClick={onClick}
		>
			<span className={styles.icon}>
				{isLoading ? <Loading size={18} /> : <Plus size={18} />}
			</span>
			<span className={styles.label}>{label}</span>
			<kbd>
				<Command size={16} />
			</kbd>
			<kbd>Z</kbd>
		</button>
	);
}

export default Button;
