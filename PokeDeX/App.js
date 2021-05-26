/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { RootStackScreen } from './src/Navigation/Navigation';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
       <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
