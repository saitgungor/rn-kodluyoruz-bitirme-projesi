import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Pressable} from 'react-native';

import TabNavigation from '../TabNavigation';
import Detail from '../../screens/Detail';
import Colors from '../../utils/ui/color';
import {useSelector, useDispatch} from 'react-redux';
import {toggeFavourite} from '../../redux/favoriteSlicer';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();
  const {favorites, activeProductId} = useSelector(state => state.favorite);
  const favIcon = favorites.includes(activeProductId)
    ? require('../../assets/icons/favourite.png')
    : require('../../assets/icons/addFavourite.png');
  const toggleFavouireHandler = id => {
    dispatch(toggeFavourite(id));
  };
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TabNavigation"
        component={TabNavigation}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={({route}) => ({
          title: route.params.title,
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.quaternary,
          headerRight: () => (
            <Pressable onPress={() => toggleFavouireHandler(route.params.id)}>
              <Image style={{width: 22, height: 22}} source={favIcon} />
            </Pressable>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
