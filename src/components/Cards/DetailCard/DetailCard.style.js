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
  chartConfig: {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  },
  chartStyle: {
    marginVertical: 8,
    borderRadius: 16,
  },
  descriptionContainer: {
    padding: 10,
  },
  descriptionTitle: {
    color: Colors.quaternary,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  hoursContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 10,
  },
  hours: {
    backgroundColor: Colors.tertiary,
    padding: 5,
    borderRadius: 5,
    color: Colors.secondary,
    fontSize: 15,
    fontWeight: 'bold',
    width: 40,
    textAlign: 'center',
  },
});
