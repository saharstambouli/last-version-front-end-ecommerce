import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cart: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,

    reducers: {  
        ADD_CART: (state, action) => {
            const product = action.payload;

            if (!state.cart.find(cart => cart.id === product.id)) {
                state.cart.push(product); 
            }
        },

        REMOVE_CART: (state, action) => {
            const productId = action.payload;

            state.cart = state.cart.filter(cart => cart.id !== productId);
        },

        setCartItems: (state, action) => {
            state.cart = action.payload;
          },
    }
});

export const { ADD_CART, REMOVE_CART ,setCartItems} = cartSlice.actions;
export default cartSlice.reducer;
