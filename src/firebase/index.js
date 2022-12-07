import auth from '@react-native-firebase/auth';

export const loginFB = async ({email, password}) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
    return response;
  } catch (error) {
    return error;
  }
};

export const registerFB = async ({email, password}) => {
  try {
    const response = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    return response;
  } catch (error) {
    return error;
  }
};
