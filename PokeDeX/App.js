/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <Text>Hello</Text>
    </View>
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
