import React from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Image} from 'react-native-svg';
import {width, height} from '../../../utils/ui/dimensions';
import {LoginScreenButton} from '../../../components/Buttons';
import {LoginScreenForm} from '../../../components/Forms';
import styles from './Login.style';
import {RegisterFormCloseButton} from '../../../components/Buttons';
const Login = () => {
  return (
    <View style={styles.container}>
      <View style={StyleSheet.absoluteFill}>
        <Svg height={height / 2} width={width}>
          <Image
            href={require('../../../assets/images/login-background.jpg')}
            width={width}
            height={height}
            preserveAspectRatio="xMidYMid slice"
          />
        </Svg>
        <RegisterFormCloseButton title={'REGISTER'} />
      </View>
      {/* <View style={styles.buttonContainer}>
        <View>
          <LoginScreenButton title={'LOG IN'} />
        </View>
        <View>
          <LoginScreenButton title={'REGISTER'} />
        </View>
      </View> */}

      <LoginScreenForm />
    </View>
  );
};

export default Login;
