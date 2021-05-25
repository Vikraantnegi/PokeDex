/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MIcons from 'react-native-vector-icons/MaterialIcons';

const routes = [
  { name: 'Home', route: 'Home' },
//   { name: 'Model 3', route: 'Home' },
//   { name: 'Model X', route: 'Home' },
//   { name: 'Model Y', route: 'Home' },
//   { name: 'Solar Roof', route: 'Home' },
//   { name: 'Solar Panels', route: 'Home' },
//   { name: 'Existing Inventory', route: 'Home' },
//   { name: 'Used Inventory', route: 'Home' },
//   { name: 'Trade-in', route: 'Home' },
//   { name: 'Powerwall', route: 'Home' },
//   { name: 'Commercial Energy', route: 'Home' },
//   { name: 'Utilities', route: 'Home' },
//   { name: 'Test Drive', route: 'Home' },
//   { name: 'Charging', route: 'Home' },
//   { name: 'Find Us', route: 'Home' },
//   { name: 'Support', route: 'Home' },
//   { name: 'Careers', route: 'Home' },
//   { name: 'Shop', route: 'Home' },
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
