import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Svg, {Image, Ellipse, ClipPath} from 'react-native-svg';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
} from 'react-native-reanimated';
import {width, height} from '../../../utils/ui/dimensions';
import {LoginScreenButton} from '../../../components/Buttons';
import {LoginScreenForm} from '../../../components/Forms';
import {RegisterFormCloseButton} from '../../../components/Buttons';
import styles from './Login.style';
const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const imagePosition = useSharedValue(1);
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height * 0.6, 0],
    );
    return {
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, {duration: 500}),
      transform: [{translateY: withTiming(interpolation, {duration: 1000})}],
    };
  });

  const closeButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, {duration: 800}),
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, {duration: 1000}))
          : withTiming(0, {duration: 300}),
    };
  });

  const loginHandler = () => {
    imagePosition.value = 0;
  };

  const registerHandler = () => {
    imagePosition.value = 0;
    if (!isRegistering) runOnJS(setIsRegistering)(true);
  };

  const closeFormHandler = () => {
    imagePosition.value = 1;
    if (isRegistering) runOnJS(setIsRegistering)(false);
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 100} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 100} />
          </ClipPath>
          <Image
            href={require('../../../assets/images/login-background.jpg')}
            width={width + 100}
            height={height + 100}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        <Animated.View style={closeButtonAnimatedStyle}>
          <RegisterFormCloseButton onPress={closeFormHandler} />
        </Animated.View>
      </Animated.View>
      <View style={styles.buttonContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <LoginScreenButton title={'LOG IN'} onPress={loginHandler} />
        </Animated.View>
        <Animated.View style={buttonsAnimatedStyle}>
          <LoginScreenButton title={'REGISTER'} onPress={registerHandler} />
        </Animated.View>
      </View>
      <Animated.View style={[styles.formContainer, formAnimatedStyle]}>
        <LoginScreenForm isRegistering={isRegistering} />
      </Animated.View>
    </View>
  );
};

export default Login;
