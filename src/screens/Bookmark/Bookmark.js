import React from 'react';
import {View, FlatList, Text} from 'react-native';
import styles from './Bookmark.style';
import Config from 'react-native-config';
import useFetchCoins from '../../hooks/useFetchCoins';
import HomeCard from '../../components/Cards/HomeCard';
import {useSelector} from 'react-redux';

const Bookmark = () => {
  const timePeriod = '24h';
  const [data] = useFetchCoins(Config.API_URL, timePeriod);
  const {favorites} = useSelector(state => state.favorite);

  const filteredList = data.filter(item => favorites.includes(item.uuid));

  const renderItem = ({item}) => <HomeCard item={item} />;

  return (
    <>
      {filteredList.length === 0 && (
        <>
          <Text style={styles.message}>Your bookmark list is empty.</Text>
          <Text style={styles.message}>
            Press bookmark icon on coin detail screen.
          </Text>
        </>
      )}
      <View style={styles.flatListContainer}>
        <FlatList data={filteredList} renderItem={renderItem} />
      </View>
    </>
  );
};

export default Bookmark;
