import React from 'react';
import Lottie from 'lottie-react-native';
import Colors from '../../../utils/ui/color';

const LoginAnimation = () => {
  return (
    <Lottie
      source={require('../../../assets/animation/cryptocurrency-bitcoin-working-loop (2).json')}
      autoPlay
      loop
      style={{backgroundColor: Colors.dark}}
    />
  );
};

export default LoginAnimation;
