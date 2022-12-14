import React from 'react';
import Lottie from 'lottie-react-native';
import Colors from '../../../utils/ui/color';

const RegisterAnimation = () => {
  return (
    <Lottie
      source={require('../../../assets/animation/101823-bitcoin.json')}
      autoPlay
      loop
      style={{backgroundColor: Colors.dark}}
    />
  );
};

export default RegisterAnimation;
