/* eslint-disable prettier/prettier */
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
