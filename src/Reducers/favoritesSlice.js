import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    favorites: [],
};

const favoritesSlice = createSlice({
    name: 'Favorites',
    initialState,

    reducers: {  
        ADD_FAVORITES: (state, action) => {
            const product = action.payload;

            if (!state.favorites.find(fav => fav.id === product.id)) {
                state.favorites.push(product); 
            }
        },

        REMOVE_FAVORITES: (state, action) => {
            const productId = action.payload;

            state.favorites = state.favorites.filter(fav => fav.id !== productId);
        }
    }
});

export const { ADD_FAVORITES, REMOVE_FAVORITES } = favoritesSlice.actions;
export default favoritesSlice.reducer;
