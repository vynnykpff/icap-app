import {combineReducers, configureStore} from '@reduxjs/toolkit';

import themeReducer from './theme/theme.slice.js';
import statusCardReducer from './status-card/statusCard.slice.js';

const reducers = combineReducers({
	theme: themeReducer,
	statusCard: statusCardReducer,
});

export const store = configureStore({
	reducer: reducers,
});
