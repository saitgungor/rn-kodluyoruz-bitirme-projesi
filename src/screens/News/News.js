import {View, Text, FlatList, Alert, Button, Pressable} from 'react-native';
import React, {useEffect} from 'react';
import useFetchNews from '../../hooks/useFetchNews';
import Config from 'react-native-config';
import style from './News.style';
import {useState} from 'react';
import NewsCard from '../../components/Cards/NewsCard';
import Input from '../../components/Input/Input';
import AntDesign from '../../components/AntDesign';
import Colors from '../../utils/ui/color';
import Loading from '../../components/Animations/Loading/Loading';
import Error from '../../components/Animations/Error';
const News = () => {
  const [search, setSearch] = useState('');
  const [news, loading, error, setSymbol] = useFetchNews(Config.API_NEWS);

  const handleSearch = () => {
    search === ''
      ? Alert.alert('Please write something to search')
      : setSymbol(search);
    return setSearch('');
  };

  const renderItem = ({item}) => <NewsCard news={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={style.container}>
      <View style={style.innerContainer}>
        <Input
          placeholder={'Search news...'}
          value={search}
          onChangeText={text => setSearch(text)}
          style={style.input}
        />
        <Pressable
          style={({pressed}) => pressed && style.pressed}
          onPress={handleSearch}>
          <View style={style.iconContainer}>
            <Text style={style.search_text}>Search</Text>
            <AntDesign name="search1" size={20} color={Colors.tertiary} />
          </View>
        </Pressable>
      </View>
      <FlatList data={news} renderItem={renderItem} />
    </View>
  );
};

export default News;
