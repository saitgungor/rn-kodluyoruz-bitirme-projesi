import React from 'react';
import Lottie from 'lottie-react-native';
import Colors from '../../../utils/ui/color';

const Searching = () => {
  return (
    <Lottie
      source={require('../../../assets/animation/searching.json')}
      autoPlay
      loop
      style={{backgroundColor: Colors.dark}}
    />
  );
};

export default Searching;
