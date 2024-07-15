import getError from '@/api/get-error';
import {
	authLogin,
	authLogout,
	authNewTokensResponse,
	authRegister,
	user
} from '@/services/globals.service';
import tokensService from '@/services/tokens.service';
import {
	IAuthRegistrationForm,
	IAuthResponse,
	TAuthLoginForm
} from '@/types/auth.types';
import { IResponse } from '@/types/response.types';
import { IUser } from '@/types/user.types';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RootState } from './../index';

export const registration = createAsyncThunk<
	IAuthResponse,
	IAuthRegistrationForm,
	{ state: RootState }
>('/auth/registration', async (data, thunkApi) => {
	try {
		const auth = await authRegister.post<IAuthRegistrationForm, IAuthResponse>(
			false,
			data
		);

		tokensService.setToken(auth.accessToken);

		return auth;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});

export const login = createAsyncThunk<
	IAuthResponse,
	TAuthLoginForm,
	{ state: RootState }
>('/auth/login', async (data, thunkApi) => {
	try {
		const auth = await authLogin.post<TAuthLoginForm, IAuthResponse>(
			false,
			data
		);

		tokensService.setToken(auth.accessToken);

		return auth;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});

export const authNewTokens = createAsyncThunk<
	IAuthResponse,
	undefined,
	{ state: RootState }
>('/auth/new-tokens', async (_, thunkApi) => {
	try {
		const auth = await authNewTokensResponse.get<IAuthResponse>(false);

		tokensService.setToken(auth.accessToken);

		return auth;
	} catch (error: any) {
		const errorData = getError(error);

		if (
			errorData.data.error === 'Refresh token not passed' ||
			errorData.data.error === 'Invalid refresh token' ||
			errorData.data.error === 'User is not found'
		) {
			tokensService.removeToken();
		}

		return thunkApi.rejectWithValue(error);
	}
});

export const logout = createAsyncThunk<
	IResponse,
	undefined,
	{ state: RootState }
>('/auth/logout', async (_, thunkApi) => {
	try {
		const auth = await authLogout.get<IResponse>(false);

		tokensService.removeToken();

		toast(auth.message);

		return auth;
	} catch (error: any) {
		return thunkApi.rejectWithValue(error);
	}
});

export const getUser = createAsyncThunk<IUser, undefined, { state: RootState }>(
	'/auth/user',
	async (_, thunkApi) => {
		try {
			const data = await user.get<IUser>(true);

			return data;
		} catch (error: any) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
