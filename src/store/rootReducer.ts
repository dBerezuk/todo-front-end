import tasksSlice from '@/store/tasks/tasks.slice.ts';
import { combineReducers } from '@reduxjs/toolkit';
import authSlice from './auth/auth.slice';

const rootReducer = combineReducers({
	auth: authSlice,
	tasks: tasksSlice
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
