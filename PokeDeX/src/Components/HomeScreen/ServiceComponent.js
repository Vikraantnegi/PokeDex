/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Text, StyleSheet, Pressable, Image } from 'react-native';
import { Fonts } from '../../HelperStyles';

export default function ServiceComponent({image, text, route}) {
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
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    ServiceText: {
        fontFamily: Fonts.fontBold,
        color: '#17171B',
        fontSize: 20,
        textAlign: 'center',
    },
    ServiceImage: {
        resizeMode: 'contain',
        height: 130,
        width: 130,
    },
});
