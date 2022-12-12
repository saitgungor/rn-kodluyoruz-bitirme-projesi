import {Text} from 'react-native';
import React from 'react';
import styles from './Button.style';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Button = ({children, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
