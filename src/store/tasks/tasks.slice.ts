import getError from '@/api/get-error';
import { TTaskErrors } from '@/types/task.types.ts';
import { createSlice, current } from '@reduxjs/toolkit';
import { createTask, deleteTask, editTask, getTasks } from './tasks.actions';
import { ITasksSliceState } from './types';

const initialState: ITasksSliceState<TTaskErrors> = {
	isFormTaskLoading: false,
	isDeleteTaskLoading: false,
	isTasksLoading: false,
	errors: null,
	tasks: []
};

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(createTask.pending, state => {
				state.isFormTaskLoading = true;
			})
			.addCase(createTask.fulfilled, (state, action) => {
				state.isFormTaskLoading = false;
				state.tasks.push(action.payload);
			})
			.addCase(createTask.rejected, (state, action) => {
				const { data } = getError<TTaskErrors>(action.payload);

				state.isFormTaskLoading = false;
				state.errors = data;
			})
			.addCase(getTasks.pending, state => {
				state.isTasksLoading = true;
			})
			.addCase(getTasks.fulfilled, (state, action) => {
				state.isTasksLoading = false;
				state.tasks = action.payload;
			})
			.addCase(getTasks.rejected, state => {
				state.isTasksLoading = false;
			})
			.addCase(editTask.pending, state => {
				state.isFormTaskLoading = true;
			})
			.addCase(editTask.fulfilled, (state, action) => {
				const data = state.tasks.find(task => task._id === action.payload._id);

				if (data) {
					data.text = action.payload.text;
					data.isCompleted = action.payload.isCompleted;
				}

				state.isFormTaskLoading = false;
			})
			.addCase(editTask.rejected, state => {
				state.isFormTaskLoading = false;
			})
			.addCase(
				deleteTask.fulfilled,
				(state, action): ITasksSliceState<TTaskErrors> => {
					return {
						...state,
						tasks: current(state.tasks).filter(
							task => task._id !== action.payload._id
						)
					};
				}
			);
	},
	reducers: {}
});

export default tasksSlice.reducer;
