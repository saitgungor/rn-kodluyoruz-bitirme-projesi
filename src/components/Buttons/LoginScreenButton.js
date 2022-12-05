import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './LoginScreenButton.style';

export const LoginScreenButton = ({title, onPress}) => {
  return (
    <Pressable
      style={styles.buttonContainer}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
