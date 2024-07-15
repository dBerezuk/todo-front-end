import { IAuthFields, TAuthErrors } from '@/types/auth.types';
import { IResponseError } from '@/types/error.types';
import { TTaskErrors, TTaskForm } from '@/types/task.types';
import { UseFormSetError } from 'react-hook-form';

type error = IAuthFields | keyof TTaskForm;

const viewErrorForm = (
	errors: IResponseError<TAuthErrors & TTaskErrors> | null,
	setError: UseFormSetError<any>
) => {
	for (const error in errors?.formError) {
		const currentError = errors?.formError[error as error];
		setError(currentError?.path as error, {
			type: currentError?.type,
			message: currentError?.msg
		});
	}
};

export default viewErrorForm;
