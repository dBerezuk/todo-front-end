import useActions from '@/hooks/redux/useActions';
import useOpenFormTaskContext from '@/pages/Home/useOpenFormTaskContext';

function useList(_id: string, toggleList: () => void) {
	const { deleteTask } = useActions();
	const { setEditTaskId, setIsShow } = useOpenFormTaskContext();

	const onEdit = () => {
		setEditTaskId(_id);
		setIsShow(true);
		toggleList();
	};

	const onDelete = () => deleteTask({ _id });

	return { onEdit, onDelete };
}

export default useList;
