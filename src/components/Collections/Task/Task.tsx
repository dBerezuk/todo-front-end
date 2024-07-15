import cn from 'classnames';

import useTask from './useTask.ts';

import Checkbox from '@/Ui/Checkbox/Checkbox';
import Actions from './Actions/Actions.tsx';

import { ITask } from '@/types/task.types.ts';

import styles from './Task.module.scss';

function Task({ _id, text, isCompleted }: ITask): JSX.Element | null {
	const { onCompleted } = useTask({ _id, isCompleted });

	return (
		<article className={cn(styles.task, { [styles.completed]: isCompleted })}>
			<Checkbox
				label="Checked"
				name="isCompleted"
				checked={isCompleted}
				value="1"
				onChange={onCompleted}
			/>
			<strong>{text}</strong>
			<Actions _id={_id} />
		</article>
	);
}

export default Task;
