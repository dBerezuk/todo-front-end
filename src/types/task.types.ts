import { IRoot } from './root.types';

export interface ITask extends IRoot {
	user: string;
	text: string;
	isCompleted: boolean;
}

export type TTaskEdit = Partial<Pick<ITask, '_id' | 'text' | 'isCompleted'>>;

export type TTaskForm = Omit<ITask, '_id' | 'createdAt' | 'updatedAt' | 'user'>;

export type TTaskResponse = {
	task: ITask;
};

export type TTasksResponse = {
	tasks: ITask[];
};

export type TTaskErrors = Partial<TTaskForm>;

// export type TTaskId = Pick<ITask, '_id'>;
