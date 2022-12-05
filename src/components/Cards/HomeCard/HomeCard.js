import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import style from './HomeCard.style';
import AntDesign from '../../../components/AntDesign';
import Colors from '../../../utils/ui/color';
import {useNavigation} from '@react-navigation/native';

const HomeCard = ({item}) => {
  const navigation = useNavigation();
  const price = item.price.slice(0, 8);
  const marketCap = item.marketCap.slice(0, 6);
  const name = item.name.slice(0, 18);
  const iconName = item.change > 0 ? 'caretup' : 'caretdown';
  const iconColor = item.change > 0 ? Colors.arrowup : Colors.arrowdown;

  const handleNavigation = uuid => {
    navigation.navigate('Detail', {id: uuid, title: item.symbol});
  };

  return (
    <Pressable onPress={() => handleNavigation(item.uuid)}>
      <View style={style.container}>
        <View style={style.innerContainer}>
          <Image style={style.image} source={{uri: item.iconUrl}} />
          <View>
            <Text style={style.title}>{name}</Text>
            <View style={style.detailContainer}>
              <View style={style.rankContainer}>
                <Text style={style.rank}>{item.rank}</Text>
              </View>
              <Text style={[style.text, {color: item.color}]}>
                {item.symbol}
              </Text>
              <AntDesign
                name={iconName}
                size={12}
                color={iconColor}
                style={style.icon}
              />
              <Text style={[style.text, {color: iconColor}]}>
                {item.change}%
              </Text>
            </View>
          </View>
          <View style={style.priceContainer}>
            <Text style={style.title}>$ {price}</Text>
            <Text style={style.text}>MCap: {marketCap}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default HomeCard;
