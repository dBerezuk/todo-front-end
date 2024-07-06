import tasksSlice from '@/store/tasks/tasks.slice.ts';
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
	tasks: tasksSlice
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;
