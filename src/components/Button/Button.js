import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './Button.style';
const Button = ({children, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[({pressed}) => pressed && styles.pressed, styles.button]}>
      <Text style={styles.buttonText}>{children}</Text>
    </Pressable>
  );
};

export default Button;
