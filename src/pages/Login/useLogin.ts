import useActions from '@/hooks/redux/useActions';
import useAppSelector from '@/hooks/redux/useAppSelector';
import { getAuth } from '@/store/auth/auth.selectors';
import { TAuthLoginForm } from '@/types/auth.types';
import viewErrorForm from '@/utils/view-error-form';
import { useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

function useLogin() {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors }
	} = useForm<TAuthLoginForm>({
		mode: 'onChange'
	});

	const { login } = useActions();
	const { errors: serverErrors } = useAppSelector(getAuth);

	useEffect(() => {
		serverErrors?.formError && viewErrorForm(serverErrors, setError);
	}, [serverErrors, setError]);

	const onSubmit: SubmitHandler<TAuthLoginForm> = data => {
		login(data);
	};

	return {
		register,
		handleSubmit,
		onSubmit,
		errors
	};
}

export default useLogin;
