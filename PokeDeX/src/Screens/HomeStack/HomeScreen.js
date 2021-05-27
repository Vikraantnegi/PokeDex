/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import { HelperStyles } from '../../HelperStyles';

export default function HomeScreen() {
    return (
        <View style={HelperStyles.Container}>
            <Image style={HelperStyles.PokeBall} source={require('../../assets/Pokeball.png')} />
        </View>
    );
}
