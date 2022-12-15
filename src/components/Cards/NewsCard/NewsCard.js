import {View, Text, Pressable, Linking} from 'react-native';
import React from 'react';
import style from './NewsCard.style';

const NewsCard = ({news}) => {
  // create open link function
  const openLink = () => {
    Linking.openURL(news.url);
  };

  // create a function filter title and description if has html tags dont show
  const filterTitle = () => {
    const regex = /(<([^>]+)>)/gi;
    const result = news.title.replace(regex, '');
    return result;
  };
  const filterDescription = () => {
    const regex = /(<([^>]+)>)/gi;
    const result = news.description?.replace(regex, '');
    return result;
  };

  return (
    <View style={style.container}>
      <Pressable
        style={({pressed}) => pressed && style.pressed}
        onPress={openLink}>
        <Text style={style.source}>{news?.source.toUpperCase()}</Text>
        <Text style={style.title}>
          {
            // filter title
            filterTitle()
          }
        </Text>
        <Text style={style.description}>
          {filterDescription()?.length > 100
            ? filterDescription().substring(0, 100) + '...'
            : filterDescription()}
        </Text>
      </Pressable>
    </View>
  );
};

export default NewsCard;
