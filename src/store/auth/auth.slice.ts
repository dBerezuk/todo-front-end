import viewError from '@/api/get-error';
import tokensService from '@/services/tokens.service';
import {
	IAuthLoginErrors,
	IAuthResponse,
	TAuthErrors,
	TAuthRegistrationErrors
} from '@/types/auth.types';
import { IUser } from '@/types/user.types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
	authNewTokens,
	getUser,
	login,
	logout,
	registration
} from './auth.actions';
import { IAuthSliceState } from './types';

const initialState: IAuthSliceState<TAuthErrors> = {
	isAuth: !!tokensService.getToken(),
	isActionLoading: false,
	isUserLoading: false,
	errors: null,
	user: {} as IUser
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	extraReducers: builder => {
		builder
			.addCase(registration.pending, state => {
				state.isActionLoading = true;
			})
			.addCase(
				registration.fulfilled,
				(state, action: PayloadAction<IAuthResponse>) => {
					state.isActionLoading = false;
					state.isAuth = true;
					state.user = action.payload.user;
				}
			)
			.addCase(registration.rejected, (state, action) => {
				const { data } = viewError<TAuthRegistrationErrors>(action.payload);

				state.isActionLoading = false;
				state.errors = data;
			})
			.addCase(login.pending, state => {
				state.isActionLoading = true;
			})
			.addCase(
				login.fulfilled,
				(state, action: PayloadAction<IAuthResponse>) => {
					state.isActionLoading = false;
					state.isAuth = true;
					state.user = action.payload.user;
				}
			)
			.addCase(login.rejected, (state, action) => {
				const { data } = viewError<IAuthLoginErrors>(action.payload);

				state.isActionLoading = false;
				state.errors = data;
			})
			.addCase(authNewTokens.fulfilled, (state, action) => {
				state.user = action.payload.user;
			})
			.addCase(authNewTokens.rejected, state => {
				state.user = {} as IUser;
				state.isAuth = false;
			})
			.addCase(logout.pending, state => {
				state.isActionLoading = true;
			})
			.addCase(logout.fulfilled, state => {
				state.isActionLoading = false;
				state.isAuth = false;
				state.user = {} as IUser;
			})
			.addCase(logout.rejected, state => {
				state.isActionLoading = false;
			})
			.addCase(getUser.pending, state => {
				state.isUserLoading = true;
			})
			.addCase(getUser.fulfilled, (state, action) => {
				state.isUserLoading = false;
				state.user = action.payload;
			})
			.addCase(getUser.rejected, state => {
				state.isUserLoading = false;
			});
	},
	reducers: {}
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
