import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: false,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log('state.user', state.user);
    },
    register: (state, action) => {
      state.user = action.payload;
      console.log('Register', state);
    },
    logout: state => {
      state.user = false;
      console.log('Logout', state);
    },
  },
});

export const {login, logout, register} = authSlice.actions;

export const selectUser = state => state.user.user;

export default authSlice.reducer;
