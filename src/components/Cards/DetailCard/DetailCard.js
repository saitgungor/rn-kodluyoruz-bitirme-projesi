import {View, Text, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
import style from './DetailCard.style';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import AntDesign from '../../AntDesign';
import Colors from '../../../utils/ui/color';

import {LineChart} from 'react-native-chart-kit';
import {height, window} from '../../../utils/ui/dimensions';

const DetailCard = ({data, timePeriod, setTimePeriod}) => {
  const {width} = useWindowDimensions();
  const contentWidth = width - 40;
  const iconName = data.change > 0 ? 'caretup' : 'caretdown';
  const iconColor = data.change > 0 ? Colors.arrowup : Colors.arrowdown;
  const price = data.price?.slice(0, 8);
  const handleTimePeriod = time => {
    setTimePeriod(time);
    console.log(timePeriod);
  };
  const tagsStyles = {
    p: {
      color: Colors.secondary,
      fontSize: 16,
      lineHeight: 24,
    },
    h3: {
      color: Colors.quaternary,
      fontSize: 18,
      lineHeight: 24,
    },
  };

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <View>
          <Text style={[style.title, {color: data.color}]}>{data.name}</Text>
          <Text style={style.price}>${price}</Text>
        </View>
        <View style={[style.changeContainer, {backgroundColor: iconColor}]}>
          <AntDesign
            name={iconName}
            size={12}
            color="white"
            style={style.changeIcon}
          />
          <Text style={style.change}>{data.change}%</Text>
        </View>
      </View>
      <View>
        <LineChart
          data={{
            labels: data.labels,
            datasets: [
              {
                data: data.sparkline,
              },
            ],
          }}
          width={window.width} // from react-native
          height={window.height / 2.2}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={3} // optional, defaults to 1
          chartConfig={style.chartConfig}
          bezier
          style={style.chartStyle}
        />
      </View>
      <View style={style.hoursContainer}>
        <Text onPress={() => handleTimePeriod('24h')} style={style.hours}>
          24h
        </Text>
        <Text onPress={() => handleTimePeriod('7d')} style={style.hours}>
          7d
        </Text>
        <Text onPress={() => handleTimePeriod('30d')} style={style.hours}>
          30d
        </Text>
        <Text onPress={() => handleTimePeriod('1y')} style={style.hours}>
          1y
        </Text>
        <Text onPress={() => handleTimePeriod('5y')} style={style.hours}>
          5y
        </Text>
      </View>

      <View style={style.descriptionContainer}>
        <Text style={style.descriptionTitle}>Description of {data.symbol}</Text>
        <RenderHtml
          enableExperimentalMarginCollapsing={true}
          tagsStyles={tagsStyles}
          contentWidth={contentWidth}
          source={{html: data.description}}
        />
      </View>
    </View>
  );
};

export default DetailCard;
