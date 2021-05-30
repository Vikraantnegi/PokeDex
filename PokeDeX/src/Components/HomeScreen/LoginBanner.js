/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Fonts } from '../../HelperStyles';
import TransparentButton from '../TransparentButton';

export default function LoginBanner() {
    const navigation = useNavigation();
    return (
        <ImageBackground
            imageStyle={styles.BannerBackgroundImage}
            source={{uri: 'https://c.wallhere.com/photos/bb/26/2048x1152_px_blue_Simple-1200388.jpg!d'}} 
            style={styles.Banner}
        >
            <View style={styles.BannerDesc}>
                <Text style={styles.BannerHeading}>
                    Want to feel like a{' '}
                    <Text style={styles.BannerHeading1}>Trainer ?</Text>
                </Text>
                <Text style={styles.Detail}>
                    Create your own list of Favorite Pokemons by just signing into the app :
                </Text>
                <View style={styles.Buttons}>
                    <TransparentButton text="Login" onPress={() => navigation.navigate('Login')}/>
                    <TransparentButton text="Sign Up" onPress={() => navigation.navigate('SignUp')}/>
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    Banner: {
        height: 170,
        width: '100%',
    },
    BannerBackgroundImage: {
        borderRadius: 30,
        opacity: 0.9,
    },
    BannerDesc: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
    },
    BannerHeading: {
        fontFamily: Fonts.fontSemi,
        fontSize: 16,
        color: 'white',
    },
    BannerHeading1: {
        fontSize: 24,
        color: 'white',
    },
    Detail: {
        fontFamily: Fonts.fontSemi,
        fontSize: 15,
        color: 'white',
        marginTop: -5,
    },
    Buttons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
    },
});
