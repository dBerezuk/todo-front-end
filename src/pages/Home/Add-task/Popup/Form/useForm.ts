import { useEffect } from 'react';
import { SubmitHandler, useForm as useHookForm } from 'react-hook-form';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useAppSelector from '@/hooks/redux/useAppSelector';
import useOpenFormTaskContext from '@/pages/Home/useOpenFormTaskContext';

import { findTask, getTasksIds } from '@/store/tasks/tasks.selectors';
import { addTask, updateTask } from '@/store/tasks/tasks.slice';

import newId from '@/utils/newId';

import { ITask, TTaskForm, TaskFields } from '@/types/task.types';

function useForm() {
	const { editTaskId, isShow } = useOpenFormTaskContext();

	const tasksIds: number[] = useAppSelector(getTasksIds);
	const task = useAppSelector(state => findTask(state, editTaskId));

	const dispatch = useAppDispatch();

	const {
		register,
		handleSubmit,
		setValue,
		reset,
		formState: { errors }
	} = useHookForm<TTaskForm>({
		mode: 'onChange'
	});

	useEffect(() => {
		setValue(TaskFields.NAME, task ? task[TaskFields.NAME] : '');
		setValue(
			TaskFields.IS_COMPLETED,
			task ? task[TaskFields.IS_COMPLETED] : false
		);
	}, [isShow]);

	const onSubmit: SubmitHandler<TTaskForm> = data => {
		const taskData: ITask = {
			[TaskFields.ID]: editTaskId ? editTaskId : newId(tasksIds),
			...data,
			[TaskFields.IS_COMPLETED]: !!data[TaskFields.IS_COMPLETED]
		};

		dispatch(editTaskId ? updateTask(taskData) : addTask(taskData));

		!editTaskId && reset();
	};

	return { handleSubmit, onSubmit, register, setValue, errors };
}

export default useForm;
