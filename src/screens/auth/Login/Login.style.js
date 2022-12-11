import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: Colors.primary,
    borderColor: Colors.secondary,
    borderBottomWidth: 1,
    width: 300,
    height: 50,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    elevation: 5,
    color: Colors.secondary,
  },
  error: {
    color: Colors.quaternary,
  },
  register: {
    marginBottom: 20,
  },
  registerText: {
    color: Colors.orange,
    fontWeight: '500',
    letterSpacing: 1,
  },
  animation: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 550,
  },
});
