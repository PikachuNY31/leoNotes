import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import cartReducer from './slices/cartSlice';
import cardSliceReducer from './slices/cardSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
    cards: cardSliceReducer,
  },
});
