import { ITask, TTaskId, TaskFields } from '@/types/task.types.ts';
import { PayloadAction, createSlice, current } from '@reduxjs/toolkit';

const initialState: ITask[] = [];

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addTask(state, action: PayloadAction<ITask>) {
			state.push(action.payload);
		},
		changeCompletedTask(state, action: PayloadAction<TTaskId>) {
			const data = state.find(
				task => task[TaskFields.ID] === action.payload[TaskFields.ID]
			);
			if (data) {
				data[TaskFields.IS_COMPLETED] = !data[TaskFields.IS_COMPLETED];
			}
		},
		updateTask(state, action: PayloadAction<ITask>) {
			const data = state.find(
				task => task[TaskFields.ID] === action.payload[TaskFields.ID]
			);
			if (data) {
				data[TaskFields.NAME] = action.payload[TaskFields.NAME];
				data[TaskFields.IS_COMPLETED] = action.payload[TaskFields.IS_COMPLETED];
			}
		},
		deleteTask(state, action: PayloadAction<TTaskId>): ITask[] {
			return current(state).filter(
				task => task[TaskFields.ID] !== action.payload[TaskFields.ID]
			);
		}
	}
});

export const { addTask, changeCompletedTask, updateTask, deleteTask } =
	tasksSlice.actions;
export default tasksSlice.reducer;
