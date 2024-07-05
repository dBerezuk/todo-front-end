import useOutside from '@/hooks/useOutside';

function useActions() {
	const { ref, isShow, setIsShow } = useOutside(false);

	const toggleList = () => setIsShow(_ => !_);

	return { ref, isShow, toggleList };
}

export default useActions;
