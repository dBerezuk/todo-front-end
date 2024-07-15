import { IResponseError } from '@/types/error.types';

interface IResponse<T> {
	status: number;
	data: IResponseError<T>;
}

const getError = <T = null>(payload: any): IResponse<T> => {
	const { status, data } = payload.response;

	return { status, data };
};

export default getError;
