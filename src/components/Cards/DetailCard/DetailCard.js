import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import style from './DetailCard.style';
import RenderHtml from 'react-native-render-html';
import {useWindowDimensions} from 'react-native';
import AntDesign from '../../AntDesign';
import Colors from '../../../utils/ui/color';
const DetailCard = ({data}) => {
  const {width} = useWindowDimensions();
  const contentWidth = width - 40;
  const iconName = data.change > 0 ? 'caretup' : 'caretdown';
  const iconColor = data.change > 0 ? Colors.arrowup : Colors.arrowdown;
  const price = data.price?.slice(0, 8);

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
    </View>
  );
};

export default DetailCard;
