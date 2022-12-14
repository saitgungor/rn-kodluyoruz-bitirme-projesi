import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';
export default StyleSheet.create({
  flatListContainer: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.dark,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    color: Colors.dark,
    backgroundColor: Colors.white,
    width: '80%',
    height: 40,
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 15,
    top: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  search_text: {
    color: Colors.blue,
    marginRight: 5,
  },
  pressed: {
    opacity: 0.5,
  },
});
