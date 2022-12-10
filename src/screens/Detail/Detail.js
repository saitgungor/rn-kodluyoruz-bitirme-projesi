import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import style from './Detail.style';
import Config from 'react-native-config';
import useFetchCoin from '../../hooks/useFetchCoin';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import {useDispatch} from 'react-redux';
import {activeProductHandler} from '../../redux/favoriteSlicer';
import Loading from '../../components/Animations/Loading';
import Error from '../../components/Animations/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  dispatch(activeProductHandler(id));
  const [data, loading, error] = useFetchCoin(Config.API_URL_COIN + id);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
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
