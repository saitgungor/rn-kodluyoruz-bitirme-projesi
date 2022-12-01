import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './HomeCard.style';

const HomeCard = ({item}) => {
  let color = item.color;

  return (
    <View style={style.container}>
      <Text style={[style.name, {color: color}]}>{item.name}</Text>
      <Image style={style.image} source={{uri: item.iconUrl}} />
    </View>
  );
};

export default HomeCard;
