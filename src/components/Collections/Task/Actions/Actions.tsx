import { TTaskId } from '@/types/task.types.ts';

import Button from './Button/Button.tsx';
import List from './List/List.tsx';

import styles from './Actions.module.scss';
import useActions from './useActions.ts';

function Actions({ id }: TTaskId): JSX.Element | null {
	const { ref, isShow, toggleList } = useActions();

	return (
		<div className={styles.box} ref={ref}>
			<Button onClick={toggleList} />
			<List id={id} isVisible={isShow} toggleList={toggleList} />
		</div>
	);
}

export default Actions;
