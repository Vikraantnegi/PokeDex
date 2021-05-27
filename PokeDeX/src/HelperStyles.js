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
        display: 'flex',
        position: 'relative',
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingVertical: 40,
    },
    PokeBall: {
        position: 'absolute',
        left: '50%',
        top: 40,
    },
});
