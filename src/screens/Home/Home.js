import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import style from './Home.style';
import Config from 'react-native-config';
import useFetchCoins from '../../hooks/useFetchCoins';
import HomeCard from '../../components/Cards/HomeCard';

const Home = ({navigation}) => {
  const [timePeriod, setTimePeriod] = useState('24h');
  const [data, loading, error] = useFetchCoins(Config.API_URL, timePeriod);

  console.log(data);

  const renderItem = ({item}) => <HomeCard item={item} />;

  return (
    <View style={style.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Home;
