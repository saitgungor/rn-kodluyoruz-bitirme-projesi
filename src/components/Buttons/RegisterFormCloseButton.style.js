import {StyleSheet} from 'react-native';
import Colors from '../../constants/color';
import {height} from '../../utils/ui/dimensions';

export default StyleSheet.create({
  buttonContainer: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 5,
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 20,
  },
});
