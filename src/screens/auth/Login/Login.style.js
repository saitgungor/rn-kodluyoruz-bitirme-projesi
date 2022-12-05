import {StyleSheet} from 'react-native';
import {height} from '../../../utils/ui/dimensions';
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  buttonContainer: {
    justifyContent: 'center',
    height: height / 3,
  },

  formContainer: {
    marginTop: 70,
    zIndex: -1,
    justifyContent: 'flex-end',
    ...StyleSheet.absoluteFill,
  },
});
