import useActions from '@/hooks/redux/useActions';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { getAuth } from '@/store/auth/auth.selectors';
import { IAuthFields, IAuthRegistrationForm } from '@/types/auth.types';
import viewErrorForm from '@/utils/view-error-form';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

function useRegistration() {
	const {
		register,
		handleSubmit,
		setError,
		getValues,
		formState: { errors }
	} = useForm<IAuthRegistrationForm>({
		mode: 'onChange'
	});

	const { registration } = useActions();
	const { errors: serverErrors } = useAppSelector(getAuth);

	useEffect(() => {
		viewErrorForm(serverErrors, setError);
	}, [serverErrors, setError]);

	const onSubmit: SubmitHandler<IAuthRegistrationForm> = data => {
		registration(data);
	};

	const validateRepeatPassword = (value: string): boolean | string => {
		const password = getValues(IAuthFields.PASSWORD);

		return value !== password
			? 'The repeated password was entered incorrectly'
			: true;
	};

	return {
		register,
		handleSubmit,
		errors,
		onSubmit,
		validateRepeatPassword
	};
}

export default useRegistration;
