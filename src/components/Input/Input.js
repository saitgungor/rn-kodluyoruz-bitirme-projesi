// create reusable input component

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';
import Colors from '../../utils/ui/color';

const Input = ({
  label,
  mode,
  onBlur,
  placeholder,
  value,
  onChangeText,
  style,
  textColor,
}) => {
  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={textColor}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      mode={mode}
      label={label}
      style={[styles.input, style]}
      secureTextEntry={
        placeholder === 'Password' || placeholder === 'Confirm Password'
          ? true
          : false
      }
      multiline={placeholder === 'Enter your bio' ? true : false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    color: Colors.primary,
  },
});
