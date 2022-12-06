import {View, FlatList, Pressable, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './Search.style';
import Config from 'react-native-config';
import useFetchCoins from '../../hooks/useFetchCoins';
import HomeCard from '../../components/Cards/HomeCard';
import Input from '../../components/Input/Input';
import AntDesign from '../../components/AntDesign';
import Colors from '../../utils/ui/color';

const Search = ({navigation}) => {
  const timePeriod = '24h';
  const [data] = useFetchCoins(Config.API_URL, timePeriod);
  const [searchValue, setSearchValue] = useState('');
  const [filteredList, setFilteredList] = useState(null);

  const handleSearch = () => {
    const filteredList = data.filter(
      item =>
        item.name.toLowerCase().startsWith(searchValue.toLowerCase()) ||
        item.symbol.toLowerCase() === searchValue.toLowerCase(),
    );
    setFilteredList(filteredList);
  };

  const renderItem = ({item}) => <HomeCard item={item} />;

  return (
    <>
      <View style={styles.inputContainer}>
        <Input
          placeholder={'Search coin'}
          value={searchValue}
          onChangeText={text => setSearchValue(text)}
          style={styles.input}
        />
        <Pressable
          style={({pressed}) => pressed && styles.pressed}
          onPress={handleSearch}>
          <View style={styles.iconContainer}>
            <Text style={styles.search_text}>Search</Text>
            <AntDesign name="search1" size={20} color={Colors.tertiary} />
          </View>
        </Pressable>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList data={filteredList || data} renderItem={renderItem} />
      </View>
    </>
  );
};

export default Search;
