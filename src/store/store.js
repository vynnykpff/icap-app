import {combineReducers, configureStore} from '@reduxjs/toolkit';

import themeReducer from './theme/theme.slice.js';
import favoritesReducer from './favorites/favorites.slice.js';
import statusCardReducer from './status-card/statusCard.slice.js';

const reducers = combineReducers({
	theme: themeReducer,
	favorites: favoritesReducer,
	statusCard: statusCardReducer,
});

export const store = configureStore({
	reducer: reducers,
});
