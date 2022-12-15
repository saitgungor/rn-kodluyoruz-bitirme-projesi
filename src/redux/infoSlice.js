import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  name: '',
  userName: '',
  bio: '',
  profileImage: 'https://www.w3schools.com/howto/img_avatar.png',
};

const infoSlice = createSlice({
  name: 'info',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateUserName: (state, action) => {
      state.userName = action.payload;
    },
    updateBio: (state, action) => {
      state.bio = action.payload;
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
