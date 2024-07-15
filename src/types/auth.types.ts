import { PropsWithChildren } from 'react';
import { IUser } from './user.types';

export enum IAuthFields {
	EMAIL = 'email',
	PASSWORD = 'password',
	REPEAT_PASSWORD = 'repeat_password'
}

export interface IAuthProps extends PropsWithChildren {
	type: 'login' | 'registration';
	onSubmit: () => Promise<void>;
}

export interface IAuthRegistrationForm {
	[IAuthFields.EMAIL]: string;
	[IAuthFields.PASSWORD]: string;
	[IAuthFields.REPEAT_PASSWORD]: string;
}

export type TAuthLoginForm = Omit<
	IAuthRegistrationForm,
	IAuthFields.REPEAT_PASSWORD
>;

export interface IAuthResponse {
	accessToken: string;
	user: IUser;
}

export type TAuthRegistrationErrors = Partial<IAuthRegistrationForm>;

export type TAuthErrors = TAuthRegistrationErrors;

export type IAuthLoginErrors = Partial<
	Omit<IAuthRegistrationForm, IAuthFields.REPEAT_PASSWORD>
>;
