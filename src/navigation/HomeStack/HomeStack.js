import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import TabNavigation from '../TabNavigation';
import Detail from '../../screens/Detail';
import Colors from '../../utils/ui/color';
import AuthNavigation from '../AuthNavigation';
import Ionicons from '../../components/Ionicons';
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
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
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
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Ionicons
              name="bookmark-outline"
              size={25}
              color={Colors.quaternary}
              style={{marginRight: 10}}
            />
          ),
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
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
