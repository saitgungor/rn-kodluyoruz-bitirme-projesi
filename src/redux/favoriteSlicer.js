import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
  activeProductId: '',
};

const favoriteSlice = createSlice({
  name: 'favorite',
  initialState,
  reducers: {
    toggeFavourite: (state, action) => {
      if (state.favorites.includes(action.payload)) {
        state.favorites = state.favorites.filter(id => id !== action.payload);
      } else {
        state.favorites.push(action.payload);
      }
    },
    activeProductHandler: (state, action) => {
      state.activeProductId = action.payload;
    },
  },
});

export const {toggeFavourite, activeProductHandler} = favoriteSlice.actions;
export default favoriteSlice.reducer;
