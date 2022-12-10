import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
const Ionicons = ({name, size, color, style, onPress}) => {
  return (
    <Icon
      name={name}
      size={size}
      color={color}
      style={style}
      onPress={onPress}
    />
  );
};

export default Ionicons;
