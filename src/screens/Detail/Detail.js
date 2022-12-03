import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import style from './Detail.style';
import Config from 'react-native-config';
import useFetchCoin from '../../hooks/useFetchCoin';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';

const Detail = ({route}) => {
  const {id} = route.params;
  const [data, loading, error] = useFetchCoin(Config.API_URL_COIN + id);
  console.log(data);

  return (
    <View style={style.container}>
      <ScrollView>
        <DetailCard data={data} />
      </ScrollView>
    </View>
  );
};

export default Detail;
