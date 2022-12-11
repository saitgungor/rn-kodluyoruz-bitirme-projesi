import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlicer';
import authReducer from './authSlice';
import infoReducer from './infoSlice';

const store = configureStore({
  reducer: {
    user: authReducer,
    favorite: favoriteReducer,
    info: infoReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
