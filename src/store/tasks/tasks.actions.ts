import { userTasks } from '@/services/globals.service';
import { IResponse } from '@/types/response.types';
import {
	ITask,
	TTaskEdit,
	TTaskForm,
	TTaskResponse,
	TTasksResponse
} from '@/types/task.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RootState } from './..';

export const createTask = createAsyncThunk<
	ITask,
	TTaskForm,
	{ state: RootState }
>('/tasks/create', async (data, thunkApi) => {
	try {
		const { task } = await userTasks.post<TTaskForm, TTaskResponse>(true, data);

		return task;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});

export const editTask = createAsyncThunk<
	ITask,
	TTaskEdit,
	{ state: RootState }
>('/tasks/edit', async ({ _id, ...rest }, thunkApi) => {
	try {
		const { task } = await userTasks.patch<TTaskEdit, TTaskResponse>(
			true,
			rest,
			`/${_id}`
		);

		return task;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});

export const deleteTask = createAsyncThunk<
	IResponse & Pick<ITask, '_id'>,
	Pick<ITask, '_id'>,
	{ state: RootState }
>('/tasks/delete', async (data, thunkApi) => {
	try {
		const response = await userTasks.delete<IResponse>(true, `/${data._id}`);

		toast(response.message);

		return { ...response, _id: data._id };
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});

export const getTasks = createAsyncThunk<
	ITask[],
	undefined,
	{ state: RootState }
>('/tasks/tasks', async (_, thunkApi) => {
	try {
		const { tasks } = await userTasks.get<TTasksResponse>(true);

		return tasks;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});
