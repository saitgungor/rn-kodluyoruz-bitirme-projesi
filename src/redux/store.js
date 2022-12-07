import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlicer';
import authReducer from './authSlicer';
const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
    auth: authReducer,
  },
});

export default store;
