import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';

export default StyleSheet.create({
  buttonContainer: {
    backgroundColor: Colors.loginButtonBackground,
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 35,
    marginHorizontal: 20,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'white',
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
});
