import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    padding: 20,
    marginBottom: 10,
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
  },
  source: {
    color: Colors.quaternary,
    fontWeight: 'bold',
    fontSize: 12,
  },
  title: {
    color: Colors.secondary,
    fontWeight: '600',
  },
  description: {
    color: Colors.secondary,
    flexWrap: 'wrap',
  },
  pressed: {
    opacity: 0.5,
  },
});
