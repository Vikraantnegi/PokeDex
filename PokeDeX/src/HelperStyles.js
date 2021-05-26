/* eslint-disable prettier/prettier */
import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

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
});
