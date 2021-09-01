import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	loading: false,
};

const LoadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		showLoading(state) {
			state.loading = true;
		},
		hideLoading(state) {
			state.loading = false;
		},
	},
});

export const { showLoading, hideLoading } = LoadingSlice.actions;

export default LoadingSlice.reducer;
