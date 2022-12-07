import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlicer';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    favorite: favoriteReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
