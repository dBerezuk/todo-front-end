import useActions from '@/hooks/redux/useActions';
import { TTaskEdit } from '@/types/task.types';

function useTask({ _id, isCompleted }: TTaskEdit) {
	const { editTask } = useActions();
	const onCompleted = () => editTask({ _id, isCompleted: !isCompleted });

	return { onCompleted };
}

export default useTask;
