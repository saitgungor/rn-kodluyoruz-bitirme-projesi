import {View, Text} from 'react-native';
import React from 'react';
import Router from './src/navigation/Router';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Router />
      </GestureHandlerRootView>
      <FlashMessage position="top" />
    </Provider>
  );
};

export default App;
