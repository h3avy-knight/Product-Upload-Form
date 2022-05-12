import { configureStore } from '@reduxjs/toolkit';
import productSliceReducer from '../features/appProduct/productSlice';
export const store = configureStore({
  reducer: {
    productSliceReducer,
  },
});
