import { useEffect } from 'react';
import { SubmitHandler, useForm as useHookForm } from 'react-hook-form';

import useAppSelector from '@/hooks/redux/useAppSelector';
import useOpenFormTaskContext from '@/pages/Home/useOpenFormTaskContext';

import { findTask, getTasksErrors } from '@/store/tasks/tasks.selectors';

import useActions from '@/hooks/redux/useActions';
import { TTaskForm } from '@/types/task.types';
import viewErrorForm from '@/utils/view-error-form';

function useForm() {
	const { editTaskId, isShow } = useOpenFormTaskContext();

	const task = useAppSelector(state => findTask(state, editTaskId));
	const error = useAppSelector(getTasksErrors);

	const { createTask, editTask } = useActions();

	const {
		register,
		handleSubmit,
		setValue,
		setError,
		reset,
		formState: { errors }
	} = useHookForm<TTaskForm>({
		mode: 'onChange'
	});

	useEffect(() => {
		setValue('text', task ? task.text : '');
		setValue('isCompleted', task ? task.isCompleted : false);
	}, [isShow, setValue]);

	useEffect(() => {
		error?.formError && viewErrorForm(error, setError);
	}, [error, setError]);

	const onSubmit: SubmitHandler<TTaskForm> = data => {
		if (editTaskId) {
			editTask({ _id: editTaskId, ...data });
		} else {
			createTask(data);
		}

		!editTaskId && reset();
	};

	return { handleSubmit, onSubmit, register, setValue, errors };
}

export default useForm;
