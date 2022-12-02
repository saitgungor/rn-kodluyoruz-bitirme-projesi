import React from 'react';
import {View, Text} from 'react-native';
import styles from './LoginScreenButtons.style';

const LoginScreenButtons = props => {
  const {text} = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

export default LoginScreenButtons;
