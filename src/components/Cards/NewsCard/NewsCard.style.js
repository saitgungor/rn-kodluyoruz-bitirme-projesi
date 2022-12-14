import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    padding: 20,
    marginBottom: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  source: {
    color: Colors.yellow,
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    color: Colors.white,
    fontWeight: '600',
  },
  description: {
    color: Colors.white,
    flexWrap: 'wrap',
  },
  pressed: {
    opacity: 0.5,
  },
});
