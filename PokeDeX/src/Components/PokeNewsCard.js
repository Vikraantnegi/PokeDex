/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Fonts } from '../HelperStyles';

export default function PokeNewsCard({title, image, date}) {
    return (
        <View style={styles.NewsCard}>
            <View style={styles.NewsImage}>
                <Image style={styles.Image} source={image} />
            </View>
            <View style={styles.NewsDetails}>
                <Text style={styles.NewsTitle}>{title}</Text>
                <Text style={styles.NewsDate}>{date}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    NewsCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 30,
        marginTop: 5,
        marginBottom: 10,
    },
    NewsImage: {
        borderRadius: 20,
        width: '35%',
    },
    Image: {
        height: 90,
        width: 110,
        borderRadius: 20,
        resizeMode: 'cover',
    },
    NewsDetails: {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        paddingLeft: 5,
    },
    NewsTitle: {
        fontFamily: Fonts.fontBold,
        fontSize: 16,
    },
    NewsDate: {
        fontFamily: Fonts.fontSemi,
        fontSize: 14,
        textAlign: 'right',
    },
});
