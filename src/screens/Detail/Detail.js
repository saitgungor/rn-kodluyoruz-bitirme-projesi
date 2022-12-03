import {View, Text} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  const {item} = route.params;

  console.log(item);
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
};

export default Detail;
