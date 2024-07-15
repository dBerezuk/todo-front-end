/* eslint-disable no-mixed-spaces-and-tabs */
import useTasks from './useTasks';

import Task from '@/components/Collections/Task/Task';

import Loading from '@/Ui/Loading/Loading';
import styles from './Tasks.module.scss';

function Tasks(): JSX.Element | null {
	const { tasks, tasksLoading } = useTasks();

	return (
		<ul className={styles.list}>
			{tasksLoading ? (
				<Loading className="text-violet" size={48} />
			) : (
				tasks.map(({ _id, ...rest }) => (
					<li key={_id}>
						<Task _id={_id} {...rest} />
					</li>
				))
			)}
		</ul>
	);
}

export default Tasks;
