import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';

export default StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  button: {
    backgroundColor: Colors.quaternary,
    width: 300,
    height: 50,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: 1,
  },
});
