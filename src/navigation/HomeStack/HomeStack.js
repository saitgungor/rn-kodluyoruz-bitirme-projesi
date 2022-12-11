import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from '../TabNavigation';
import Detail from '../../screens/Detail';
import Colors from '../../utils/ui/color';
import ProfileSettings from '../../screens/ProfileSettings';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
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
      <Stack.Screen
        name="ProfileSettings"
        component={ProfileSettings}
        options={{
          title: 'Edit Profile',
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTintColor: Colors.quaternary,
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
