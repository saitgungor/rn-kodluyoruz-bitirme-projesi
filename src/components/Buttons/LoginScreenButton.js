import React from 'react';
import {View, Text} from 'react-native';
import styles from './LoginScreenButton.style';

export const LoginScreenButton = props => {
  const {text} = props;
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};
