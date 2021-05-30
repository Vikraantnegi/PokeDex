/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Fonts } from '../../HelperStyles';
import ADIcon from 'react-native-vector-icons/AntDesign';

export default function PokeCard({image, name, species, type, bgColor}) {

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
        <View style={styles.PokeCardContainer}>
            <View  style={styles.icon}>
                <ADIcon size={20} name={favIcon} color="red" onPress={() => toggleHeart(favIcon)} />
            </View>
            <View style={[styles.PokeImage, {backgroundColor: bgColor}]}>
                <Image source={{uri : image}} style={styles.PokeCardImage} />
            </View>
            <View style={styles.PokeDesc}>
                <View style={styles.PokeTitle}>
                    <Text style={styles.PokeName}>{name}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    PokeCardContainer: {
        display : 'flex',
        flexDirection: 'column',
        height: 210,
        width: 150,
        borderWidth: 1,
        borderRadius: 30,
        marginBottom: 20,
        position: 'relative',
    },
    PokeImage: {
        height: 150,
        borderRadius: 30,
        margin: 5,
    },
    PokeCardImage: {
        height: 140,
        width: 140,
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    PokeDesc:{
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    PokeName: {
        fontFamily: Fonts.fontSemi,
        fontSize: 16,
        color: 'black',
    },
    PokeTitle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    icon: {
        position: 'absolute',
        zIndex: 1,
        right: 12,
        top: 12,
        backgroundColor: 'white',
        height: 25,
        width: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
