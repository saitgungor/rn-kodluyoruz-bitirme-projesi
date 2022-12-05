import React from 'react';
import {Text, Pressable} from 'react-native';
import styles from './RegisterFormCloseButton.style';

export const RegisterFormCloseButton = ({onPress}) => {
  return (
    <Pressable
      onPress={() => {
        onPress();
      }}
      style={styles.buttonContainer}>
      <Text style={styles.buttonText}>X</Text>
    </Pressable>
  );
};
