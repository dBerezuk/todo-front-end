import useOpenFormTaskContext from '../useOpenFormTaskContext';

function useAddTask() {
	const { editTaskId, ref, isShow, setIsShow } = useOpenFormTaskContext();

	const onTogglePopup = () => setIsShow(_ => !_);

	return { ref, isShow, editTaskId, onTogglePopup };
}

export default useAddTask;
