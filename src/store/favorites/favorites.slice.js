import {createSlice} from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
	name: 'favorites',
	initialState: {
		favoritesArray: [],
	},
	reducers: {
		setFavorites: (state, action) => {
			return {
				...state,
				favoritesArray: action.payload,
			};
		},
	}
})

export const {setFavorites} = favoritesSlice.actions

export default favoritesSlice.reducer;
