import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import style from './Detail.style';
import Config from 'react-native-config';
import useFetchCoin from '../../hooks/useFetchCoin';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import {useDispatch} from 'react-redux';
import {activeProductHandler} from '../../redux/favoriteSlicer';

const Detail = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  dispatch(activeProductHandler(id));
  const [data, loading, error] = useFetchCoin(Config.API_URL_COIN + id);

  if (loading) {
    <Text>...loading</Text>;
  }

  return (
    <View style={style.container}>
      <ScrollView>
        <DetailCard data={data} />
      </ScrollView>
    </View>
  );
};

export default Detail;
