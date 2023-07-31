import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/count.slice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
