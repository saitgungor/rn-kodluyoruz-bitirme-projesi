import {View, Text} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import styles from './RegisterForm.style';
import {useDispatch} from 'react-redux';
import Button from '../../../components/Button';
import Colors from '../../../utils/ui/color';
import {updateBio, updateName, updateUserName} from '../../../redux/infoSlice';
import {getUserId, register} from '../../../redux/authSlice';
import firestore from '@react-native-firebase/firestore';
const RegisterForm = ({navigation}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    fullName: Yup.string().required('Required Full Name'),
    userName: Yup.string().required('Required User Name'),
    bio: Yup.string().required('Required Bio'),
  });

  const AddUser = async values => {
    try {
      const docRef = firestore().collection('Users').doc();
      const userId = docRef.id;
      dispatch(getUserId(userId));
      docRef.set({
        userId: userId,
        userName: values.userName,
        name: values.fullName,
        bio: values.bio,
      });
    } catch (error) {
      console.error(error);
    }
  };

  const onSubmit = async values => {
    const registerForm = await AddUser(values);
    console.log(registerForm);
    dispatch(updateName(values.fullName));
    dispatch(updateUserName(values.userName));
    dispatch(updateBio(values.bio));
    dispatch(register(values));
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{fullName: '', userName: '', bio: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.inner_container}>
            <Input
              style={styles.textInput}
              label="Full Name"
              mode="outlined"
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
              value={values.email}
              placeholder="Full Name"
              textColor={Colors.grey300}
            />
            {errors.fullName && touched.fullName && (
              <Text style={styles.error}>{errors.fullName}</Text>
            )}
            <Input
              style={styles.textInput}
              label="User Name"
              mode="outlined"
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              value={values.userName}
              placeholder="User Name"
              secureTextEntry={true}
              textColor={Colors.grey300}
            />
            {errors.userName && touched.userName && (
              <Text style={styles.error}>{errors.userName}</Text>
            )}
            <Input
              style={styles.textInput}
              label="Bio"
              mode="outlined"
              onChangeText={handleChange('bio')}
              onBlur={handleBlur('bio')}
              value={values.bio}
              placeholder="Bio"
              textColor={Colors.grey300}
            />
            {errors.bio && touched.bio && (
              <Text style={styles.error}>{errors.bio}</Text>
            )}
            <Button
              style={styles.button}
              onPress={handleSubmit}
              title="Register">
              <Text style={styles.buttonText}>Save</Text>
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default RegisterForm;
