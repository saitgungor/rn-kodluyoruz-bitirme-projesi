import React from 'react';
import {View, Text} from 'react-native';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import styles from './Login.style';
import {useDispatch} from 'react-redux';
import {login} from '../../../redux/authSlice';
import {loginFB} from '../../../firebase/firebase';
import Button from '../../../components/Button';
import Colors from '../../../utils/ui/color';
import LoginAnimation from '../../../components/Animations/LoginAnimation';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';

const Login = ({navigation}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = async values => {
    const loginAuth = await loginFB(values);
    console.log('loginAuth', loginAuth);
    dispatch(login(loginAuth));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.animation}>
        <LoginAnimation />
      </View>
      <Formik
        initialValues={{email: '', password: ''}}
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
              label="Email"
              mode="outlined"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
              placeholder="Email"
              textColor={Colors.inputColor}
            />
            {errors.email && touched.email && (
              <Text style={styles.error}>{errors.email}</Text>
            )}
            <Input
              style={styles.textInput}
              label="password"
              mode="outlined"
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              placeholder="Password"
              textColor={Colors.inputColor}
              secureTextEntry={true}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button
              style={styles.button}
              mode="contained"
              onPress={handleSubmit}>
              <Text style={styles.buttonText}>Login</Text>
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.register}>
        <Text
          onPress={() => navigation.navigate('Register')}
          style={styles.registerText}>
          Don't you have an account? Register
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
