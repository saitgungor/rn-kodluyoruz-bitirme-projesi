import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Favourites.style';
import Config from 'react-native-config';
import useFetchCoins from '../../hooks/useFetchCoins';
import HomeCard from '../../components/Cards/HomeCard';
import {useSelector} from 'react-redux';

const Favourites = () => {
  const timePeriod = '24h';
  const [data] = useFetchCoins(Config.API_URL, timePeriod);
  const {favorites} = useSelector(state => state.favorite);

  const filteredList = data.filter(item => favorites.includes(item.uuid));

  const renderItem = ({item}) => <HomeCard item={item} />;

  return (
    <>
      {filteredList.length === 0 && (
        <>
          <Text style={styles.noFavourite}>Your favorite list is empty.</Text>
          <Text style={styles.noFavourite}>
            {' '}
            Press favourite icon on coin detail screen.
          </Text>
        </>
      )}
      <View style={styles.flatListContainer}>
        <FlatList data={filteredList} renderItem={renderItem} />
      </View>
    </>
  );
};

export default Favourites;
