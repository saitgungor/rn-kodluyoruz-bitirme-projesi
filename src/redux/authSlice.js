// create auth slice for redux

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isAuth: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuth = true;
      console.log('login', state);
    },
    register: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
    },
  },
});

export const {login, logout, register} = authSlice.actions;
export const authSelector = state => state.auth;
export default authSlice.reducer;
