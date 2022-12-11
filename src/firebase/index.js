import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const loginFB = async ({email, password}) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const registerFB = async ({email, password, name}) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await response.user.updateProfile({
      displayName: name,
    });

    return response;
  } catch (error) {
    return error;
  }
};

export const logoutFB = async () => {
  try {
    const response = await auth().signOut();
    return response;
  } catch (error) {
    return error;
  }
};

// update user profile name , userName , bio
export const updateProfileFB = async ({name, userName, bio}) => {
  try {
    const response = await firestore()
      .collection('users')
      .doc(auth().currentUser.uid)
      .update({
        name,
        userName,
        bio,
      });
    return response;
  } catch (error) {
    return error;
  }
};
