import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isAuthenticated: false,
	token: '',
};

const AuthSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		login(state, action) {
			state.isAuthenticated = true;
			state.token = action.payload;
		},
		logout(state) {
			state.loading = false;
			state.token = '';
		},
	},
});

export const { login, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
