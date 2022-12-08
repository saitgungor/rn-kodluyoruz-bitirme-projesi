import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import style from './Detail.style';
import Config from 'react-native-config';
import useFetchCoin from '../../hooks/useFetchCoin';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import Loading from '../../components/Animations/Loading/Loading';
import Error from '../../components/Animations/Error';

const Detail = ({route}) => {
  const {id} = route.params;
  const [data, loading, error, timePeriod, setTimePeriod] = useFetchCoin(
    Config.API_URL_COIN + id,
  );
  console.log(data);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <View style={style.container}>
      <ScrollView>
        <DetailCard
          data={data}
          timePeriod={timePeriod}
          setTimePeriod={setTimePeriod}
        />
      </ScrollView>
    </View>
  );
};

export default Detail;
