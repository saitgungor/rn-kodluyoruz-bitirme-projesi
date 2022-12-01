import {StyleSheet} from 'react-native';
import Colors from '../../../constants/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  name: {
    color: Colors.secondary,
  },
  image: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
  },
});
