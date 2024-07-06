import cn from 'classnames';
import { Smile } from 'lucide-react';

import styles from './ButtonEmoji.module.scss';

interface IProps {
	isOpenEmoji: boolean;
	onOpenEmoji: () => void;
}

function ButtonEmoji({ isOpenEmoji, onOpenEmoji }: IProps) {
	return (
		<button
			className={cn(styles.button, { [styles.active]: isOpenEmoji })}
			type="button"
			onClick={onOpenEmoji}
		>
			<Smile />
		</button>
	);
}

export default ButtonEmoji;
