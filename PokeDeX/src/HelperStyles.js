/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

export const Fonts = {
    fontBlack: 'Poppins-Black',
    fontBold: 'Poppins-Bold',
    fontExtraBold: 'Poppins-ExtraBold',
    fontMedium: 'Poppins-Medium',
    fontSemi: 'Poppins-SemiBold',
    fontLight: 'Poppins-Light',
    fontRegular: 'Poppins-Regular',
    fontThin: 'Poppins-Thin',
  };

export const HelperStyles = StyleSheet.create({
    Container :{
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        flex: 1,
        display: 'flex',
        position: 'relative',
        backgroundColor: 'white',
    },
    ScrollView: {
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    PokeBall: {
        position: 'absolute',
        top: '-16.5%',
        right: '-31.5%',
    },
    PokeBall1: {
        transform: [{rotate: '180deg'}],
        resizeMode: 'contain',
        width: 300,
    },
    PokeBall2: {
        resizeMode: 'contain',
        width: 300,
        marginTop: -60,
    },
    MenuIcon: {
        position: 'absolute',
        right: 20,
        top: 40,
    },
});
