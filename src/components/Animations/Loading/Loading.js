import React from 'react';
import Lottie from 'lottie-react-native';
import Colors from '../../../utils/ui/color';

const Loading = () => {
  return (
    <Lottie
      source={require('../../../assets/animation/101823-bitcoin.json')}
      autoPlay
      loop
      style={{backgroundColor: Colors.primary}}
    />
  );
};

export default Loading;
