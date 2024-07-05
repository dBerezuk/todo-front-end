import cn from 'classnames';

import Form from './Form/Form.tsx';

import styles from './Popup.module.scss';

interface IProps {
	isVisible: boolean;
}

function Popup({ isVisible }: IProps): JSX.Element {
	return (
		<div
			className={cn(styles.popup, { [styles.visible]: isVisible })}
			// @ts-ignore
			inert={!isVisible ? '' : null}
		>
			<Form />
		</div>
	);
}

export default Popup;
