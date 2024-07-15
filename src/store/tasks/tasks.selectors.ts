import type { RootReducer } from '@/store/rootReducer.ts';
import { ITask } from '@/types/task.types.ts';

export const getTasks = (state: RootReducer) => state.tasks.tasks;

export const getTasksLoading = (state: RootReducer) =>
	state.tasks.isTasksLoading;

export const formTaskLoading = (state: RootReducer) =>
	state.tasks.isFormTaskLoading;

export const getTasksErrors = (state: RootReducer) => state.tasks.errors;

export const findTask = (
	state: RootReducer,
	id: string | null
): ITask | undefined => state.tasks.tasks.find(task => task._id === id);
