import { IResponseError } from '@/types/error.types';
import { IUser } from '@/types/user.types';

export interface IAuthSliceState<T> {
	isAuth: boolean;
	isActionLoading: boolean;
	isUserLoading: boolean;
	errors: IResponseError<T> | null;
	user: IUser;
}
