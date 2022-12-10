import {StyleSheet} from 'react-native';
import Colors from '../../../utils/ui/color';
import {height, Height, width, Width} from '../../../utils/ui/dimensions';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
  innerContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.3,
    borderBottomColor: 'grey',
    padding: 15,
    justifyContent: 'space-between',
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 15,
  },

  title: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 5,
    color: Colors.secondary,
  },
  detailContainer: {
    flexDirection: 'row',
    marginTop: 5,
    alignItems: 'center',
  },
  priceContainer: {
    marginLeft: 'auto',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    letterSpacing: 0.5,
    marginRight: 5,
    color: Colors.secondary,
  },
  icon: {
    alignSelf: 'center',
    marginRight: 5,
  },
  rankContainer: {
    backgroundColor: 'grey',
    paddingHorizontal: 5,
    borderRadius: 5,
    marginRight: 5,
  },
  rank: {
    fontWeight: 'bold',
    color: Colors.secondary,
  },
  pressed: {
    opacity: 0.5,
  },
});
