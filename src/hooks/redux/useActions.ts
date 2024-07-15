import * as authActions from '@/store/auth/auth.actions';
import * as tasksActions from '@/store/tasks/tasks.actions';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import useAppDispatch from './useAppDispatch';

const rootActions = {
	...authActions,
	...tasksActions
};

const useActions = () => {
	const dispatch = useAppDispatch();

	return useMemo(() => bindActionCreators(rootActions, dispatch), [dispatch]);
};

export default useActions;
