import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import loadingReducer from './reducers/loadingReducer';

export default configureStore({
	reducer: {
		loading: loadingReducer,
		auth: authReducer,
	},
});
