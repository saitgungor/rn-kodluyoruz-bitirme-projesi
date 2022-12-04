import {configureStore} from '@reduxjs/toolkit';
import favoriteReducer from './favoriteSlicer';
const store = configureStore({
  reducer: {
    favorite: favoriteReducer,
  },
});

export default store;
