import useAppSelector from '@/hooks/redux/useAppSelector';
import { formTaskLoading } from '@/store/tasks/tasks.selectors';
import useOpenFormTaskContext from '../useOpenFormTaskContext';

function useAddTask() {
	const { editTaskId, ref, isShow, setIsShow } = useOpenFormTaskContext();
	const taskLoading = useAppSelector(formTaskLoading);

	const onTogglePopup = () => setIsShow(_ => !_);

	return { ref, isShow, editTaskId, onTogglePopup, taskLoading };
}

export default useAddTask;
