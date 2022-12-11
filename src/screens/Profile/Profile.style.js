import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 90,
    backgroundColor: Colors.primary,
  },
  firstContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    marginTop: 10,
    color: Colors.secondary,
  },
  userName: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 5,
    color: Colors.inputColor,
  },
  bio: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 5,
    color: Colors.bioColor,
  },
  secondContainer: {
    flex: 1,
  },
  updateBookmark: {
    fontSize: 15,
    textAlign: 'center',
    color: Colors.inputColor,
    marginTop: 10,
  },
});
