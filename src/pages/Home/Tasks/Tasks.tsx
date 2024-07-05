import useAppSelector from '@/hooks/redux/useAppSelector';
import { getTasks } from '@/store/tasks/tasks.selectors';

import Task from '@/components/Collections/Task/Task';

import styles from './Tasks.module.scss';

function Tasks(): JSX.Element | null {
	const tasks = useAppSelector(getTasks);

	return (
		<ul className={styles.list}>
			{tasks.map(({ id, name, isCompleted }) => (
				<li key={id}>
					<Task id={id} name={name} isCompleted={isCompleted} />
				</li>
			))}
		</ul>
	);
}

export default Tasks;
