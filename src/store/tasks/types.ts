import { IResponseError } from '@/types/error.types';
import { ITask } from '@/types/task.types';

export interface ITasksSliceState<T> {
	isFormTaskLoading: boolean;
	isDeleteTaskLoading: boolean;
	isTasksLoading: boolean;
	errors: IResponseError<T> | null;
	tasks: ITask[];
}
