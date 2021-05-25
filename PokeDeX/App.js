/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <View style={styles.AppContainer}>
          <Text>Hello</Text>
        </View>
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
