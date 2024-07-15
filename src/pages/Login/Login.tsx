import Auth from '@/components/Shared/Auth/Auth';
import { IAuthFields } from '@/types/auth.types';
import FieldDefault from '@/Ui/Fields/FieldDefault/FieldDefault';
import { emailRegex } from '@/utils/regex';
import useLogin from './useLogin';

function Login(): JSX.Element | null {
	const { register, handleSubmit, onSubmit, errors } = useLogin();

	return (
		<Auth type="login" onSubmit={handleSubmit(onSubmit)}>
			<FieldDefault
				label="Email"
				fieldName={IAuthFields.EMAIL}
				type="email"
				placeholder="Enter email"
				error={errors[IAuthFields.EMAIL]}
				{...register(IAuthFields.EMAIL, {
					required: 'Enter email',
					pattern: {
						value: emailRegex,
						message: 'Enter the correct email'
					}
				})}
			/>
			<FieldDefault
				label="Password"
				fieldName={IAuthFields.PASSWORD}
				type="password"
				placeholder="Enter password"
				error={errors[IAuthFields.PASSWORD]}
				{...register(IAuthFields.PASSWORD, {
					required: 'Enter password'
				})}
			/>
		</Auth>
	);
}

export default Login;
