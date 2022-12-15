import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import News from '../../screens/News';
import Search from '../../screens/Search';
import Bookmark from '../../screens/Bookmark';
import Profile from '../../screens/Profile';
import Colors from '../../utils/ui/color';

import Ionicons from '../../components/Ionicons';

const Tab = createBottomTabNavigator();

const TabNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: Colors.dark,
        },
        headerTintColor: Colors.yellow,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.grey500,
          borderTopWidth: 0,
          elevation: 0,
          position: 'absolute',
          bottom: 20,
          left: 20,
          right: 20,
          borderRadius: 15,
          height: 60,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="cryptOS"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="home"
              size={26}
              color={focused ? Colors.yellow : Colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="News"
        component={News}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="earth"
              size={26}
              color={focused ? Colors.yellow : Colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="search-outline"
              size={26}
              color={focused ? Colors.yellow : Colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="bookmarks"
              size={26}
              color={focused ? Colors.yellow : Colors.white}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <Ionicons
              name="person"
              size={26}
              color={focused ? Colors.yellow : Colors.white}
            />
          ),
          headerRight: () => (
            <Ionicons
              name="settings-outline"
              size={25}
              color={Colors.yellow}
              style={{marginRight: 10}}
              onPress={() => navigation.navigate('ProfileSettings')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  shadow: {
    shadowColor: Colors.white,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 1.5,
    elevation: 1,
  },
});
