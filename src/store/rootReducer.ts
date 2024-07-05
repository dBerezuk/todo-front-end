import { combineReducers } from '@reduxjs/toolkit';
import tasksSlice from '@/store/tasks/tasks.slice.ts';

const rootReducer = combineReducers({
	tasks: tasksSlice
});

export type RootReducer = ReturnType<typeof rootReducer>;

export default rootReducer;