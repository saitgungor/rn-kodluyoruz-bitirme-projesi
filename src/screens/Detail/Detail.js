import {View, ScrollView} from 'react-native';
import React from 'react';
import style from './Detail.style';
import Config from 'react-native-config';
import useFetchCoin from '../../hooks/useFetchCoin';
import DetailCard from '../../components/Cards/DetailCard/DetailCard';
import Loading from '../../components/Animations/Loading/Loading';
import Error from '../../components/Animations/Error';
import {useLayoutEffect} from 'react';
import Ionicons from '../../components/Ionicons';
import Colors from '../../utils/ui/color';
import {useDispatch, useSelector} from 'react-redux';
import {addFavorite, removeFavorite} from '../../redux/favoriteSlicer';

const Detail = ({route, navigation}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const [data, loading, error, timePeriod, setTimePeriod] = useFetchCoin(
    Config.API_URL_COIN + id,
  );

  const favoriteCoins = useSelector(state => state.favorite.favorites);
  const favorite = favoriteCoins.includes(id);

  const headerButtonPressHandler = () => {
    if (favorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Ionicons
            name={favorite ? 'bookmark' : 'bookmark-outline'}
            size={25}
            color={Colors.quaternary}
            style={{marginRight: 10}}
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

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
