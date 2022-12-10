import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, Pressable} from 'react-native';

import TabNavigation from '../TabNavigation';
import Detail from '../../screens/Detail';
import Colors from '../../utils/ui/color';
import {useSelector, useDispatch} from 'react-redux';

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  const dispatch = useDispatch();
  const {favorites, activeProductId} = useSelector(state => state.favorite);

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
        })}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
