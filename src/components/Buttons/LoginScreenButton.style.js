import {StyleSheet} from 'react-native';

import {height} from '../../utils/ui/dimensions';
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
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  buttonText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },

  formContainer: {
    justifyContent: 'center',
    height: height / 3,
  },
});
