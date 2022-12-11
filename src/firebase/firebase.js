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
      message: `Welcome ${registerAuth.user.email}`,
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

// add User info to firebase firestore
// export const AddUserInfoFB = async values => {
//   const {name, userName, bio} = values;
//   const dispatch = useDispatch();
//   try {
//     const response = await firestore()
//       .collection('Users')
//       .doc(auth().currentUser.uid)
//       .set({
//         name,
//         userName,
//         bio,
//       });
//     dispatch(updateName(name));
//     dispatch(updateUserName(userName));
//     dispatch(updateBio(bio));
//     return response;
//   } catch (e) {
//     showMessage({
//       message: String(e),
//       type: 'danger',
//       icon: 'danger',
//       position: 'top',
//       duration: 3000,
//     });
//   }
// };

// // update user info in firebase firestore and redux store in react native
// export const updateProfileFB = async ({name, userName, bio}) => {
//   try {
//     const response = await firestore()
//       .collection('Users')
//       .doc(auth().currentUser.uid)
//       .update({
//         name,
//         userName,
//         bio,
//       });
//     return response;
//   } catch (e) {
//     showMessage({
//       message: String(e),
//       type: 'danger',
//       icon: 'danger',
//       position: 'top',
//       duration: 3000,
//     });
//   }
// };
