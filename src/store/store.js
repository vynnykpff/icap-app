import {combineReducers, configureStore} from '@reduxjs/toolkit';
import themeReducer from './theme/theme.slice.js';

const reducers = combineReducers({
	theme: themeReducer,
});

export const store = configureStore({
	reducer: reducers,
});
