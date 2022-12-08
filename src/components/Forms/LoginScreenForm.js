import React from 'react';
import {View, TextInput, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import styles from './LoginScreenForm.style';
import {LoginScreenButton} from '../Buttons';
import {useDispatch} from 'react-redux';
import {login, register} from '../../redux/authSlice';
import {loginFB, registerFB} from '../../firebase';

export const LoginScreenForm = ({isRegistering}) => {
  const dispatch = useDispatch();

  const onSubmit = async values => {
    if (isRegistering) {
      const registerAuth = await registerFB(values);
      console.log('registerAuth', registerAuth);
      dispatch(register(registerAuth));
    }
    const loginAuth = await loginFB(values);
    console.log('loginAuth', loginAuth);
    dispatch(login(loginAuth));
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    name: isRegistering ? Yup.string().required('Required') : null,
  });

  return (
    <Formik
      initialValues={{email: '', password: '', name: ''}}
      onSubmit={onSubmit}
      validationSchema={validationSchema}>
      {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
        <View style={styles.container}>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'black'}
            style={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {errors.email && touched.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          {isRegistering && (
            <View>
              <TextInput
                placeholder="Full Name"
                placeholderTextColor={'black'}
                style={styles.textInput}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
              {errors.name && touched.name && (
                <Text style={styles.error}>{errors.name}</Text>
              )}
            </View>
          )}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'black'}
            style={styles.textInput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          {errors.password && touched.password && (
            <Text style={styles.error}>{errors.password}</Text>
          )}
          <LoginScreenButton
            onPress={handleSubmit}
            title={`${isRegistering ? 'REGISTER' : 'LOG IN'}`}
          />
        </View>
      )}
    </Formik>
  );
};
