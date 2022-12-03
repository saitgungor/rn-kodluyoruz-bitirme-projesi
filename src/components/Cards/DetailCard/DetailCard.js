import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import style from './DetailCard.style';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';

const DetailCard = ({data}) => {
  const {width} = useWindowDimensions();
  const contentWidth = width - 40;

  const price = data.price.slice(0, 8);

  if (data) {
    return (
      <View style={style.container}>
        <View style={style.innerContainer}>
          <View>
            <Text style={[style.title, {color: data.color}]}>{data.name}</Text>
            <Text style={style.price}>${price}</Text>
          </View>
          <Text style={style.change}>{data.change}%</Text>
        </View>
        {/* <RenderHtml
          contentWidth={contentWidth}
          source={{html: data.description}}
          enableExperimentalMarginCollapsing={true}
          baseStyle={style.description}
        /> */}
      </View>
    );
  }
};

export default DetailCard;
