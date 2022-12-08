import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';

export default StyleSheet.create({
  container: {},

  textInput: {
    height: 50,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 25,
    paddingLeft: 10,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginHorizontal: 30,
  },
});
