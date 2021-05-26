/* eslint-disable prettier/prettier */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';
import { UserName } from '../redux/features/authSlice';

export default function SplashScreen({navigation}) {
    const username = useSelector(UserName);
    console.log(username);
    setTimeout(() => {
        username ? navigation.navigate('Home') : navigation.navigate('Auth');
    }, 2000);
    return (
        <View style={styles.AppContainer}>
            <Animatable.Image
                delay={500}
                animation="bounceIn"
                source={require('../assets/Pokedex.webp')}
                style={styles.SplashImage}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    AppContainer: {
      paddingTop: 20,
      position: 'relative',
      height: '100%',
      backgroundColor: '#46b5f9',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    SplashImage: {
        width: '100%',
        resizeMode: 'contain',
    },
    BottomImage: {
        position: 'absolute',
        top: 20,
        width: '90%',
        resizeMode: 'contain',
    },
  });
