import {View, FlatList} from 'react-native';
import React from 'react';
import style from './Home.style';
import Config from 'react-native-config';
import useFetchCoins from '../../hooks/useFetchCoins';
import HomeCard from '../../components/Cards/HomeCard';
import Loading from '../../components/Animations/Loading/Loading';
import Error from '../../components/Animations/Error';

const Home = () => {
  const [data, loading, error] = useFetchCoins(Config.API_URL);

  const renderItem = ({item}) => <HomeCard item={item} />;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={style.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default Home;
