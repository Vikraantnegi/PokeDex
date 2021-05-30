/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import { Fonts } from '../HelperStyles';

export default function TransparentButton({text, onPress}) {
    return (
        <Pressable onPress={() => onPress()} style={styles.TransparentButton}>
            <Text style={styles.ButtonText}>{text}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    TransparentButton: {
        height: 40,
        width: '40%',
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
    },
    ButtonText: {
        color: '#013d85',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontFamily: Fonts.fontBold,
        fontSize: 18,
    },
});
