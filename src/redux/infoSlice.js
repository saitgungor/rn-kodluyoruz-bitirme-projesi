//create redux slice

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: 'Jennie Kim',
  userName: '@jenniekim',
  bio: 'I love watching Anime while enjoying a cup of hot caremel machiatto',
  profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload.name;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload.userName;
    },
    updateBio: (state, action) => {
      state.bio = action.payload.bio;
    },
    updateProfileImage: (state, action) => {
      state.profileImage = action.payload;
    },
  },
});

export const {updateName, updateUserName, updateBio, updateProfileImage} =
  infoSlice.actions;
export const infoSelector = state => state.info;
export default infoSlice.reducer;
