import { axiosClassic, axiosWithAuth } from '@/api/interceptors';

class GlobalsService {
	private URL: string;

	constructor(url: string) {
		this.URL = url;
	}

	async get<T>(isAuth: boolean) {
		const response = await (isAuth ? axiosWithAuth : axiosClassic).get<T>(
			this.URL
		);

		return response.data;
	}

	async post<T, K>(isAuth: boolean, data: T) {
		const response = await (isAuth ? axiosWithAuth : axiosClassic).post<K>(
			this.URL,
			{
				...data
			}
		);
		return response.data;
	}

	async patch<T, K>(isAuth: boolean, data: T | null, endpoints: string) {
		const response = await (isAuth ? axiosWithAuth : axiosClassic).patch<K>(
			this.URL + endpoints,
			{
				...data
			}
		);
		return response.data;
	}

	async delete<T>(isAuth: boolean, endpoints: string) {
		const response = await (isAuth ? axiosWithAuth : axiosClassic).delete<T>(
			this.URL + endpoints
		);
		return response.data;
	}
}

export const authRegister = new GlobalsService('/auth/register');
export const authLogin = new GlobalsService('/auth/login');
export const authNewTokensResponse = new GlobalsService('/auth/new-tokens');
export const authLogout = new GlobalsService('/auth/logout');

export const user = new GlobalsService('/user');

export const userTasks = new GlobalsService('/user/tasks');
