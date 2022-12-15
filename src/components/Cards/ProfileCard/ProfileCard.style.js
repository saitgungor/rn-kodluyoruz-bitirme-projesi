import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  firstContainer: {
    flex: 1,
    backgroundColor: Colors.dark,
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
    color: Colors.white,
  },
  userName: {
    fontSize: 15,
    alignSelf: 'center',
    marginTop: 5,
    color: Colors.grey100,
  },
  bio: {
    fontSize: 15,
    textAlign: 'center',
    marginHorizontal: 50,
    marginTop: 5,
    color: Colors.grey100,
  },
  secondContainer: {
    flex: 1,
    marginTop: 20,
  },
  updateBookmark: {
    fontSize: 15,
    marginTop: 10,
    alignSelf: 'center',
    color: Colors.grey300,
  },
  bookmarkText: {
    color: Colors.yellow,
  },
});
