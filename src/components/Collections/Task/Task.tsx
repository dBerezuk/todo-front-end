import cn from 'classnames';

import useTask from './useTask.ts';

import Checkbox from '@/Ui/Checkbox/Checkbox';
import Actions from './Actions/Actions.tsx';

import { ITask, TaskFields } from '@/types/task.types.ts';

import styles from './Task.module.scss';

function Task({ id, name, isCompleted }: ITask): JSX.Element | null {
	const { onCompleted } = useTask({ id });

	return (
		<article className={cn(styles.task, { [styles.completed]: isCompleted })}>
			<Checkbox
				label="Checked"
				name={TaskFields.IS_COMPLETED}
				checked={isCompleted}
				value="1"
				onChange={onCompleted}
			/>
			<strong>{name}</strong>
			<Actions id={id} />
		</article>
	);
}

export default Task;
