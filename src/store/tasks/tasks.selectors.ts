import type { RootReducer } from '@/store/rootReducer.ts';
import { ITask, TaskFields } from '@/types/task.types.ts';
import { createSelector } from '@reduxjs/toolkit';

export const getTasks = (state: RootReducer) => state.tasks;

export const findTask = (
	state: RootReducer,
	id: number | null
): ITask | undefined => state.tasks.find(_ => _[TaskFields.ID] === id);

export const getTasksIds = createSelector([getTasks], tasks =>
	tasks.map(task => task[TaskFields.ID])
);
