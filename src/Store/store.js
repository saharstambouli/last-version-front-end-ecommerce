import { configureStore, combineReducers } from '@reduxjs/toolkit';
import favoritesReducer from '../Reducers/favoritesSlice'
import cartReducer from '../Reducers/cartSlice'
import userReducer from '../Reducers/userSlice'


const rootReducer = combineReducers({
 Cart_store: cartReducer,
  favorites_store: favoritesReducer,
  user_store: userReducer,
});


 const store = configureStore({

  reducer: rootReducer,
})

export default store;