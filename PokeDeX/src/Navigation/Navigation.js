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
import TopNewsScreen from '../Screens/HomeStack/TopNewsScreen';
import OnBoardingScreen from '../Screens/AuthStack/OnBoardingScreen';
import SignUpScreen from '../Screens/AuthStack/SignUpScreen';
import LoginScreen from '../Screens/AuthStack/LoginScreen';
import LogoutScreen from '../Screens/AuthStack/LogoutScreen';
import ProfileScreen from '../Screens/AuthStack/ProfileScreen';
import EditProfileScreen from '../Screens/AuthStack/EditProfileScreen';
import ChangePasswordScreen from '../Screens/AuthStack/ChangePasswordScreen';
import AboutScreen from '../Screens/HomeStack/AboutScreen';
import SplashScreen from '../Screens/SplashScreen';

const RootStack = createStackNavigator();
export const RootStackScreen = () => {
    return (
        <RootStack.Navigator headerMode="none">
            <RootStack.Screen name="Splash" component={SplashScreen}
                // options={{
                // animationEnabled: false,
                // }}
            />
            <RootStack.Screen name="Home" component={DrawerScreen}
                // options={{
                // animationEnabled: false,
                // }}
            />
            <RootStack.Screen name="Auth" component={AuthStackScreen}
                // options={{
                // animationEnabled: false,
                // }}
            />
        </RootStack.Navigator>
    );
};

const Drawer = createDrawerNavigator();
const DrawerScreen = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Pokedex" component={PokedexScreen} />
    <Drawer.Screen name="TopNews" component={TopNewsScreen} />
    <Drawer.Screen name="LegendaryPokemon" component={LegendaryPokemonScreen} />
    <Drawer.Screen name="CreatorFav" component={CreatorFavScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
    <Drawer.Screen name="Logout" component={LogoutScreen} />
    <Drawer.Screen name="About" component={AboutScreen} />
  </Drawer.Navigator>
);

const Tabs = createBottomTabNavigator();
const TabsScreen = () => (
    <Tabs.Navigator initialRouteName="Home">
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
            <SettingsStack.Screen name="About" component={AboutScreen} />
            <HomeStack.Screen name="Pokemon" component={PokemonScreen} />
            <HomeStack.Screen name="News" component={NewsScreen} />
            <HomeStack.Screen name="LegendaryPokemon" component={LegendaryPokemonScreen} />
            <HomeStack.Screen name="Evolution" component={EvolutionScreen} />
            <HomeStack.Screen name="Types" component={TypesScreen} />
            <HomeStack.Screen name="Trainers" component={TrainersScreen} />
            <HomeStack.Screen name="Abilities" component={AbilitiesScreen} />
            <HomeStack.Screen name="Moves" component={MovesScreen} />
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
