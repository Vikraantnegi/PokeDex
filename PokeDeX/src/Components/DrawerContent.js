/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MIcons from 'react-native-vector-icons/MaterialIcons';
import FIcons from 'react-native-vector-icons/Feather';
import { Fonts } from '../HelperStyles';

const routes = [
  { name: 'Home', route: 'Home', icon: 'home' },
  { name: 'Pokedex', route: 'Pokedex', icon: 'perm-device-info' },
  { name: 'Trending News', route: 'News', icon: 'menu-book' },
  { name: 'Legendary Pokemon', route: 'LegendaryPokemon', icon: 'home' },
  { name: "Creator's Favorite", route: 'CreatorFav', icon: 'ballot' },
  { name: 'Profile', route: 'Profile', icon: 'person' },
  { name: 'Settings', route: 'Settings', icon: 'settings' },
  { name: 'Logout', route: 'Logout', icon: 'logout' },
  { name: 'About', route: 'About', icon: 'description' },
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
                icon={() => (
                  <Pressable activeOpacity={1} style={styles.innerContainer}>
                    <MIcons
                      name={route.icon}
                      size={25}
                      style={styles.Icon}
                    />
                  </Pressable>
                )}
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
    fontSize: 16,
    fontFamily: Fonts.fontSemi,
    marginLeft: -20,
    color: 'rgb(57, 60, 65)',
  },
  innerContainer:{
    height: 30,
    width: 30,
    borderRadius: 15,
    justifyContent: 'center',
  },
  Icon: {
    alignSelf: 'center',
    marginBottom: 4,
    color: '#fe0000',
  },
});

export default DrawerContent;
