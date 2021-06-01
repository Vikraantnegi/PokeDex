/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeStack/HomeScreen';
import PokedexScreen from '../Screens/HomeStack/PokedexScreen';
import PokemonScreen from '../Screens/HomeStack/PokemonScreen';
import NewsScreen from '../Screens/HomeStack/NewsScreen';
import LegendaryPokemonScreen from '../Screens/HomeStack/LegendaryPokemonScreen';
import SearchScreen from '../Screens/HomeStack/SearchScreen';
import FavoriteScreen from '../Screens/HomeStack/FavoriteScreen';
import SettingsScreen from '../Screens/HomeStack/SettingsScreen';
import EvolutionScreen from '../Screens/HomeStack/EvolutionScreen';
import TypesScreen from '../Screens/HomeStack/TypesScreen';
import TrainersScreen from '../Screens/HomeStack/TrainersScreen';
import AbilitiesScreen from '../Screens/HomeStack/AbilitiesScreen';
import MovesScreen from '../Screens/HomeStack/MovesScreen';
import CreatorFavScreen from '../Screens/HomeStack/CreatorFavScreen';
import OnBoardingScreen from '../Screens/AuthStack/OnBoardingScreen';
import SignUpScreen from '../Screens/AuthStack/SignUpScreen';
import LoginScreen from '../Screens/AuthStack/LoginScreen';
import LogoutScreen from '../Screens/AuthStack/LogoutScreen';
import ProfileScreen from '../Screens/AuthStack/ProfileScreen';
import EditProfileScreen from '../Screens/AuthStack/EditProfileScreen';
import ChangePasswordScreen from '../Screens/AuthStack/ChangePasswordScreen';
import AboutScreen from '../Screens/HomeStack/AboutScreen';
import SplashScreen from '../Screens/SplashScreen';
import DrawerContent from '../Components/DrawerContent';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-animatable';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={SplashScreen} />
            <RootStack.Screen name="Home" component={DrawerScreen}  />
            <RootStack.Screen name="Auth" component={AuthStackScreen} />
        </RootStack.Navigator>
    );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
    <Drawer.Navigator
        initialRouteName="Home"
        drawerPosition="right"
        drawerContent={ props => <DrawerContent {...props}/>}
    >
        <Drawer.Screen
            name="Home"
            component={TabsScreen}
        />
    </Drawer.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
    // tabBar = {props => <CustomTabBar {...props}}
    <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({ route }) => ({
          tabBarLabel: ({focused, color}) => {
            return !focused ? <Text style={styles.tabBarLabel}>{route.name}</Text> : null;
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused
                ? 'home-variant'
                : 'home-variant-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            } else if (route.name === 'Pokedex') {
              iconName = focused ? 'pokeball' : 'pokeball';
            } else if (route.name === 'Favorite') {
              iconName = focused ? 'heart' : 'heart-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }
            return (
                <View style={focused ? styles.FocusedIconContainer : styles.IconContainer}>
                    {
                        route.name === 'Home' || route.name === 'Pokedex' ?
                            <MCIcons name={iconName} size={size} color={focused ? 'white' : color} /> :
                            <IonIcons name={iconName} size={size} color={focused ? 'white' : color} />
                    }
                </View>
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#fe0000',
          inactiveTintColor: '#fe0000',
          showLabel: true,
          style: {paddingBottom: 5, height: 60},
        }}
    >
      <Tabs.Screen name="Home" component={HomeStackScreen} />
      <Tabs.Screen name="Search" component={SearchScreen} />
      <Tabs.Screen name="Pokedex" component={PokedexScreen} />
      <Tabs.Screen name="Favorite" component={FavoriteScreen} />
      <Tabs.Screen name="Settings" component={SettingsStackScreen} />
    </Tabs.Navigator>
  );

const HomeStack = createStackNavigator();
export const HomeStackScreen = () => {
    return (
        <HomeStack.Navigator
            initialRouteName="Splash"
            screenOptions={{
                headerShown: false,
            }}
        >
            <HomeStack.Screen name="Home" component={HomeScreen} />
            <HomeStack.Screen name="Pokedex" component={PokedexScreen} />
            <HomeStack.Screen name="About" component={AboutScreen} />
            <HomeStack.Screen name="Pokemon" component={PokemonScreen} />
            <HomeStack.Screen name="News" component={NewsScreen} />
            <HomeStack.Screen name="LegendaryPokemon" component={LegendaryPokemonScreen} />
            <HomeStack.Screen name="Evolution" component={EvolutionScreen} />
            <HomeStack.Screen name="Types" component={TypesScreen} />
            <HomeStack.Screen name="Trainers" component={TrainersScreen} />
            <HomeStack.Screen name="Abilities" component={AbilitiesScreen} />
            <HomeStack.Screen name="Moves" component={MovesScreen} />
            <HomeStack.Screen name="CreatorFav" component={CreatorFavScreen} />
        </HomeStack.Navigator>
    );
};

const SettingsStack = createStackNavigator();
export const SettingsStackScreen = () => {
    return (
        <SettingsStack.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerShown: false,
            }}
        >
            <SettingsStack.Screen name="Settings" component={SettingsScreen} />
            <SettingsStack.Screen name="Profile" component={ProfileScreen} />
            <SettingsStack.Screen name="EditProfile" component={EditProfileScreen} />
            <SettingsStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
            <SettingsStack.Screen name="Logout" component={LogoutScreen} />
            <SettingsStack.Screen name="About" component={AboutScreen} />
        </SettingsStack.Navigator>
    );
};

const AuthStack = createStackNavigator();
export const AuthStackScreen = () => (
    <AuthStack.Navigator
        initialRouteName="OnBoardingScreen"
        screenOptions={{
            headerShown: false,
        }}
    >
        <AuthStack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
        <AuthStack.Screen name="SignUp" component={SignUpScreen} />
        <AuthStack.Screen name="Login" component={LoginScreen} />
        <AuthStack.Screen name="Profile" component={ProfileScreen} />
        <AuthStack.Screen name="EditProfile" component={EditProfileScreen} />
        <AuthStack.Screen name="ChangePassword" component={ChangePasswordScreen} />
        <AuthStack.Screen name="Logout" component={LogoutScreen} />
    </AuthStack.Navigator>
);

const styles = StyleSheet.create({
    FocusedIconContainer: {
        height: 45,
        width: 45,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: '#fe0000',
        zIndex: 1,
    },
    IconContainer: {
    },
    tabBarLabel:{
        fontSize: 12,
        fontWeight: 'bold',
        color: '#fe0000',
    },
});
