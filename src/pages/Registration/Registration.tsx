import Auth from '@/components/Shared/Auth/Auth';
import { IAuthFields } from '@/types/auth.types';
import FieldDefault from '@/Ui/Fields/FieldDefault/FieldDefault';
import { emailRegex } from '@/utils/regex';
import useRegistration from './useRegistration';

function Registration(): JSX.Element | null {
	const { register, handleSubmit, onSubmit, errors, validateRepeatPassword } =
		useRegistration();

	return (
		<Auth type="registration" onSubmit={handleSubmit(onSubmit)}>
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
					required: 'Enter password',
					minLength: {
						value: 6,
						message: 'enter a password of 6 characters'
					}
				})}
			/>
			<FieldDefault
				label="Repeat password"
				fieldName={IAuthFields.REPEAT_PASSWORD}
				type="password"
				placeholder="Enter repeat password"
				error={errors[IAuthFields.REPEAT_PASSWORD]}
				{...register(IAuthFields.REPEAT_PASSWORD, {
					required: 'Enter repeat password',
					validate: validateRepeatPassword
				})}
			/>
		</Auth>
	);
}

export default Registration;
