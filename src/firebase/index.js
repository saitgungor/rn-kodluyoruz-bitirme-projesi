import auth from '@react-native-firebase/auth';

export const loginFB = async ({email, password}) => {
  try {
    const response = await auth().signInWithEmailAndPassword(email, password);
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
