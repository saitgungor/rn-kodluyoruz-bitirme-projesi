import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'user',
  initialState: {
    user: false,
    userid: '',
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      console.log('state.user', state.user);
    },
    register: (state, action) => {
      state.user = action.payload;
      console.log('Register', state.user);
    },
    logout: state => {
      state.user = false;
      console.log('Logout', state);
    },
    getUserId: (state, action) => {
      state.userid = action.payload;
      console.log('Get User ID', state.userid);
    },
  },
});

export const {login, logout, register, getUserId} = authSlice.actions;

export const selectUser = state => state.user.user;
export const selectUserId = state => state.user.userid;
export default authSlice.reducer;
