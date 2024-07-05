import Button from './Button/Button.tsx';
import Popup from './Popup/Popup.tsx';

import styles from './AddTask.module.scss';
import useAddTask from './useAddTask.ts';

function AddTask(): JSX.Element {
	const { ref, isShow, onTogglePopup, editTaskId } = useAddTask();

	return (
		<div className={styles.box} ref={ref}>
			<Popup isVisible={isShow} />
			<Button
				label={`${editTaskId ? 'Update' : 'Create new'} task`}
				onClick={onTogglePopup}
				isVisible={isShow}
			/>
		</div>
	);
}

export default AddTask;
