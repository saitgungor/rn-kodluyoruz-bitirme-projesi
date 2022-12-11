import {View, Text} from 'react-native';
import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';
import Input from '../../../components/Input';
import styles from './Register.style';
import {useDispatch} from 'react-redux';
import {register} from '../../../redux/authSlice';
import {registerFB} from '../../../firebase';
import Button from '../../../components/Button';
import Colors from '../../../utils/ui/color';
import RegisterAnimation from '../../../components/Animations/RegisterAnimation';
import {KeyboardAvoidingView} from 'react-native';
import {Platform} from 'react-native';
const Register = ({navigation}) => {
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Required'),
  });

  const onSubmit = async values => {
    const registerAuth = await registerFB(values);
    console.log('registerAuth', registerAuth);
    dispatch(register(registerAuth));
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <View style={styles.animation}>
        <RegisterAnimation />
      </View>
      <Formik
        initialValues={{email: '', password: '', confirmPassword: ''}}
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
              secureTextEntry={true}
              textColor={Colors.inputColor}
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Input
              style={styles.textInput}
              label="Confirm Password"
              mode="outlined"
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
              placeholder="Confirm Password"
              secureTextEntry={true}
              textColor={Colors.inputColor}
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword}</Text>
            )}
            <Button
              style={styles.button}
              onPress={handleSubmit}
              title="Register">
              <Text style={styles.buttonText}>Register</Text>
            </Button>
          </View>
        )}
      </Formik>
      <View style={styles.login}>
        <Text
          onPress={() => navigation.navigate('Login')}
          style={styles.loginText}>
          Do you have an account? Login
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;
