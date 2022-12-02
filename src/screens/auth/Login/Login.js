import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import {width, height} from '../../../utils/ui/dimensions';
import {LoginScreenButton} from '../../../components/Buttons';
import styles from './Login.style';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height} width={width}>
          <Image
            href={require('../../../assets/images/login-background.jpg')}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <LoginScreenButton text={'LOG IN'} />
        </View>
        <View>
          <LoginScreenButton text={'REGISTER'} />
        </View>
      </View>
    </View>
  );
};

export default Login;
