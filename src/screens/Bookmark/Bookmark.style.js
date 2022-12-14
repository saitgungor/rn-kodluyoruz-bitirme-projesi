import {StyleSheet} from 'react-native';
import Colors from '../../utils/ui/color';
export default StyleSheet.create({
  flatListContainer: {
    flex: 1,
    backgroundColor: Colors.dark,
  },
  message: {
    color: Colors.white,
    backgroundColor: Colors.dark,
    textAlign: 'center',
    fontSize: 18,
    paddingTop: 15,
    paddingBottom: 15,
  },
});
