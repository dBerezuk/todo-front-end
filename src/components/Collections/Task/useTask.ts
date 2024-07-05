import useAppDispatch from '@/hooks/redux/useAppDispatch';

import { changeCompletedTask } from '@/store/tasks/tasks.slice';

import { TTaskId } from '@/types/task.types';

function useTask({ id }: TTaskId) {
	const dispatch = useAppDispatch();
	const onCompleted = () => dispatch(changeCompletedTask({ id }));

	return { onCompleted };
}

export default useTask;
