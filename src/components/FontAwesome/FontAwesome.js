import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
const FontAwesome = ({name, size, color, style}) => {
  return <Icon name={name} size={size} color={color} style={style} />;
};

export default FontAwesome;
