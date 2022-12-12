import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {showMessage} from 'react-native-flash-message';
import {useDispatch} from 'react-redux';
import {updateBio, updateName, updateUserName} from '../redux/infoSlice';

export const loginFB = async values => {
  const {email, password} = values;
  try {
    const loginAuth = await auth().signInWithEmailAndPassword(email, password);
    showMessage({
      message: 'Welcome back',
      type: 'success',
      icon: 'success',
      duration: 1000,
    });
    return loginAuth;
  } catch (e) {
    showMessage({
      message: String(e),
      type: 'danger',
      icon: 'danger',
      position: 'top',
      duration: 3000,
    });
  }
};

export const registerFB = async values => {
  const {email, password} = values;
  try {
    const registerAuth = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    showMessage({
      message: 'Welcome to the club!',
      type: 'success',
      icon: 'success',
      duration: 1000,
    });
    return registerAuth;
  } catch (e) {
    showMessage({
      message: String(e),
      type: 'danger',
      icon: 'danger',
      position: 'top',
      duration: 3000,
    });
  }
};

export const logoutFB = async () => {
  try {
    await auth().signOut();
    return true;
  } catch (e) {
    showMessage({
      message: String(e),
      type: 'danger',
      icon: 'danger',
      position: 'top',
    });
    return false;
  }
};

export const querySnap = () => {
  firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        const userid = documentSnapshot.id;
        const userdata = documentSnapshot.data();
        console.log(userid, userdata);
      });
    });
};

export const addUserInfo = async values => {
  const {name, userName, bio} = values;
  try {
    const add = await firestore().collection('Users').add({
      name: name,
      userName: userName,
      bio: bio,
    });

    return add;
  } catch (e) {
    showMessage({
      message: String(e),
      type: 'danger',
      icon: 'danger',
      position: 'top',
    });
  }
};

// how to update current user's info in react native
export const updateUserInfo = async values => {
  const {name, userName, bio} = values;
  try {
    const update = await firestore().collection('Users').doc().update({
      name: name,
      userName: userName,
      bio: bio,
    });
    return update;
  } catch (e) {
    showMessage({
      message: String(e),
      type: 'danger',
      icon: 'danger',
      position: 'top',
    });
  }
};

// export const getUserInfo = async () => {
//   try {
//     const user = await firestore().collection('Users').get();
//     return user;
//   } catch (e) {
//     showMessage({
//       message: String(e),
//       type: 'danger',
//       icon: 'danger',
//       position: 'top',
//     });
//   }
// }

// export const deleteUserInfo = async () => {
//   try {
//     const deleteInfo = await firestore().collection('Users').doc().delete();
//     return deleteInfo;
//   } catch (e) {
//     showMessage({
//       message: String(e),
//       type: 'danger',
//       icon: 'danger',
//       position: 'top',
//     });
//   }
// }
