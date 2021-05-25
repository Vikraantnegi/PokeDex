/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import { RootStackScreen } from './src/Navigation/Navigation';
import SplashScreen from './src/Screens/SplashScreen';

const App = () => {
  const [time, setTimeUp] = useState(false);

  setTimeout(() => {
    setTimeUp(true);
  }, 1500);

  return (
    <Provider store={store}>
      <NavigationContainer>
        { time ? <RootStackScreen /> : <SplashScreen /> }
      </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  AppContainer: {
    paddingTop: 20,
    height: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
