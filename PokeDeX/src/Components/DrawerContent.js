/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MIcons from 'react-native-vector-icons/MaterialIcons';

const routes = [
  { name: 'Home', route: 'Home' },
  { name: 'Pokedex', route: 'Pokedex' },
  { name: 'TopNews', route: 'News' },
  { name: 'LegendaryPokemon', route: 'LegendaryPokemon' },
  { name: 'CreatorFav', route: 'CreatorFav' },
  { name: 'Profile', route: 'Profile' },
  { name: 'Settings', route: 'Settings' },
  { name: 'Logout', route: 'Logout' },
  { name: 'About', route: 'About' },
];

const DrawerContent = (props) => {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <Pressable style={styles.closeDrawer} onPress={() => props.navigation.closeDrawer()}>
          <MIcons name="close" size={20} color="black" />
        </Pressable>
        <View style={styles.drawerContent}>
          {
            routes.map((route, index) => (
              <DrawerItem
                key={index}
                pressOpacity={0.2}
                label={route.name}
                labelStyle={styles.drawerText}
                onPress={() => {props.navigation.navigate(route.route);}}
              />
            ))
          }
        </View>
      </DrawerContentScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    marginVertical: 40,
  },
  closeDrawer: {
    position: 'absolute',
    top: 20,
    right: 0,
    paddingHorizontal: 20,
  },
  drawerText: {
    fontSize: 14,
    fontWeight: '400',
    textTransform: 'uppercase',
    color: 'rgb(57, 60, 65)',
  },
});

export default DrawerContent;
