import tokensService from '@/services/tokens.service';
import store from '@/store';
import { authNewTokens } from '@/store/auth/auth.actions';
import { IResponseError } from '@/types/error.types';
import axios, {
	type AxiosRequestConfig,
	type CreateAxiosDefaults
} from 'axios';
import { toast } from 'react-toastify';
import getError from './get-error';

const options: CreateAxiosDefaults = {
	baseURL: import.meta.env.VITE_APP_URL_API + '/api',
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
};

const axiosClassic = axios.create(options);
const axiosWithAuth = axios.create(options);

axiosClassic.interceptors.response.use(
	response => {
		return response;
	},
	(error: IResponseError) => {
		const { data } = getError(error);

		if (data.error) toast.error(data.error);

		return Promise.reject(error);
	}
);

axiosWithAuth.interceptors.request.use(request => {
	const accessToken = tokensService.getToken();

	if (accessToken) {
		request.headers.Authorization = `Bearer ${accessToken}`;
	}

	return request;
});

interface IOriginalRequest extends AxiosRequestConfig {
	_retry?: boolean;
}

axiosWithAuth.interceptors.response.use(
	response => response,
	async error => {
		const originRequest: IOriginalRequest = error.config;

		if (error.response?.status === 401 && !originRequest._retry) {
			originRequest._retry = true;

			await store.dispatch(authNewTokens());

			return axiosWithAuth(originRequest);
		}

		return Promise.reject(error);
	}
);

export { axiosClassic, axiosWithAuth };
