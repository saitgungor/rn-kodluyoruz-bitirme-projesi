import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  firstContainer: {
    backgroundColor: Colors.primary,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  changeName: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 5,
    color: Colors.bioColor,
  },
  secondContainer: {
    backgroundColor: Colors.primary,
    marginTop: 20,
  },
  name: {
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginHorizontal: 20,
    color: Colors.secondary,
    letterSpacing: 1,
  },
  input: {
    backgroundColor: Colors.secondary,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    height: 40,
    paddingHorizontal: 10,
  },
  bio: {
    height: 100,
    textAlignVertical: 'top',
    multiline: true,
  },
  button: {
    backgroundColor: Colors.quaternary,
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
    height: 40,
    paddingHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: Colors.primary,
    fontSize: 15,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  },
});
