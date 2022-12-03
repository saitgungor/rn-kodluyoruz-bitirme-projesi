import React from 'react';
import {View, Text} from 'react-native';
import styles from './RegisterFormCloseButton.style';

export const RegisterFormCloseButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.buttonText}>X</Text>
    </View>
  );
};
