import useActions from '@/hooks/redux/useActions';
import { getAuth } from '@/store/auth/auth.selectors';
import { useSelector } from 'react-redux';

function useButtonLogout() {
	const { logout } = useActions();
	const { isActionLoading } = useSelector(getAuth);

	const onLogout = () => {
		logout();
	};

	return {
		onLogout,
		isActionLoading
	};
}

export default useButtonLogout;
