import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  innerContainer: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    color: Colors.secondary,
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  title: {
    color: Colors.secondary,
    fontSize: 15,
  },
  description: {
    color: Colors.secondary,
    fontSize: 16,
    fontWeight: 'normal',
  },
  change: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  changeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
  },
  changeIcon: {
    marginRight: 5,
    alignSelf: 'center',
  },
});
