import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.dark,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Colors.white,
    marginBottom: 20,
  },
  titleSmall: {
    fontSize: 15,
    color: Colors.white,
  },
  inner_container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: Colors.dark,
    borderColor: Colors.white,
    borderBottomWidth: 0.3,
    width: 300,
    height: 50,
    borderRadius: 5,
    margin: 10,
    padding: 10,
    elevation: 5,
    color: Colors.white,
  },
  error: {
    color: Colors.yellow,
  },
  login: {
    marginBottom: 20,
  },
  loginText: {
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
