/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Fonts } from '../../HelperStyles';
import ADIcon from 'react-native-vector-icons/AntDesign';
import { TypesMap } from '../../Data/HashMaps/TypeHashMap';

export default function PokeCard({image, name, species, type}) {

    const navigation = useNavigation();
    const [favIcon, setIcon] = useState('hearto');
    const toggleHeart = ( icon ) => {
        if (icon === 'hearto'){
            setIcon('heart');
        } else {
            setIcon('hearto');
        }
    };

    return (
        <View style={[styles.PokeCardContainer, {backgroundColor: TypesMap.get(type[0]).bgColor}]}>
            <Image source={{uri : image}} style={styles.PokeCardImage} />
            <View style={styles.PokeDesc}>
                <View style={styles.PokeDetails}>
                    <Text style={styles.PokeName}>{name}</Text>
                    <ADIcon size={20} name={favIcon} color="red" onPress={() => toggleHeart(favIcon)} />
                </View>
                <View style={styles.PokeDetails}>
                    <Text style={styles.PokeSpecies}>{species}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    PokeCardContainer: {
        display : 'flex',
        flexDirection: 'column',
        height: 200,
        width: 150,
        borderRadius: 30,
        marginBottom: 20,
        position: 'relative',
    },
    PokeCardImage: {
        margin: 5,
        height: 140,
        width: 140,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    PokeDesc:{
        paddingHorizontal: 15,
        marginTop: -5,
    },
    PokeName: {
        fontFamily: Fonts.fontSemi,
        fontSize: 16,
        color: 'black',
    },
    PokeSpecies: {
        fontFamily: Fonts.fontRegular,
        fontSize: 12,
        color: 'black',
    },
    PokeDetails: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: -5,
    },
});
