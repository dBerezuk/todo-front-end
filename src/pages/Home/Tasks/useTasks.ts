import useActions from '@/hooks/redux/useActions';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { getTasks, getTasksLoading } from '@/store/tasks/tasks.selectors';
import { useEffect } from 'react';

function useTasks() {
	const { getTasks: getTasksResponse } = useActions();

	useEffect(() => {
		getTasksResponse();
	}, [getTasksResponse]);

	const tasks = useAppSelector(getTasks);
	const tasksLoading = useAppSelector(getTasksLoading);

	return { tasks, tasksLoading };
}

export default useTasks;
