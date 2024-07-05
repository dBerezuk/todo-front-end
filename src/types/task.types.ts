export enum TaskFields {
	ID = 'id',
	NAME = 'name',
	IS_COMPLETED = 'isCompleted'
}

export interface ITask {
	[TaskFields.ID]: number;
	[TaskFields.NAME]: string;
	[TaskFields.IS_COMPLETED]: boolean;
}

export type TTaskForm = Omit<ITask, TaskFields.ID>;

export type TTaskId = Pick<ITask, TaskFields.ID>;
