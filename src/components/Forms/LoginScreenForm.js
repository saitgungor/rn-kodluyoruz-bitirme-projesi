import React from 'react';
import {View, TextInput} from 'react-native';
import {Formik} from 'formik';
import styles from './LoginScreenForm.style';
import {LoginScreenButton} from '../Buttons';

export const LoginScreenForm = ({isRegistering}) => {
  return (
    <Formik
      initialValues={{email: ''}}
      onSubmit={values => console.log(values)}>
      {({handleChange, handleBlur, handleSubmit, values}) => (
        <>
          <TextInput
            placeholder="Email"
            placeholderTextColor={'black'}
            style={styles.textInput}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {isRegistering && (
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={'black'}
              style={styles.textInput}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
          )}
          <TextInput
            placeholder="Password"
            placeholderTextColor={'black'}
            style={styles.textInput}
            onChangeText={handleChange('password')}
            onBlur={handleBlur('password')}
            value={values.password}
          />
          <LoginScreenButton
            onPress={handleSubmit}
            title={`${isRegistering ? 'REGISTER' : 'LOG IN'}`}
          />
        </>
      )}
    </Formik>
  );
};
