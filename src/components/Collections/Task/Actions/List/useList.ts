import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useOpenFormTaskContext from '@/pages/Home/useOpenFormTaskContext';
import { deleteTask } from '@/store/tasks/tasks.slice';

function useList(id: number, toggleList: () => void) {
	const dispatch = useAppDispatch();
	const { setEditTaskId, setIsShow } = useOpenFormTaskContext();

	const onEdit = () => {
		setEditTaskId(id);
		setIsShow(true);
		toggleList();
	};

	const onDelete = () => {
		dispatch(deleteTask({ id }));
	};

	return { onEdit, onDelete };
}

export default useList;
