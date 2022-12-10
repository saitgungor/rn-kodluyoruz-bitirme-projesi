import React from 'react';
import Lottie from 'lottie-react-native';
import Colors from '../../../utils/ui/color';

const Error = () => {
  return (
    <Lottie
      source={require('../../../assets/animation/86271-error-no-data.json')}
      autoPlay
      loop
      style={{backgroundColor: Colors.primary}}
    />
  );
};

export default Error;
