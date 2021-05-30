/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import { Fonts } from '../../HelperStyles';

export default function CategoryComponent({image, text, route}) {
    const navigation = useNavigation();
    return (
        <Pressable style={styles.ServiceContainer} onPress={() => navigation.navigate(route)}>
            <Image source={image} style={styles.ServiceImage} />
            <Text style={styles.ServiceText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    ServiceContainer: {
        height: 80,
        width: 80,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ServiceText: {
        fontFamily: Fonts.fontRegular,
        color: '#17171B',
        fontSize: 14,
    },
    ServiceImage: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
});
