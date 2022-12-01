import {View, Text, Image} from 'react-native';
import React from 'react';
import style from './HomeCard.style';

const HomeCard = ({item}) => {
  return (
    <View style={style.container}>
      <Text>{item.name}</Text>
      <Image source={{uri: item.iconUrl}} />
    </View>
  );
};

export default HomeCard;
