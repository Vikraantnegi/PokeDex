/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const FirstScreen = ({styles, swipeLeft, swipeRight, config}) => {
    return (
        <GestureRecognizer
            onSwipeLeft={() => swipeLeft()}
            onSwipeRight={() => swipeRight()}
            config={config}
            style={styles.gesture}
        >
            <View style={styles.Inner}>
                <Image source={require('../../assets/pokepik.png')} style={styles.InnerImage} />
                <View style={styles.InnerView}>
                    <Text style={styles.InnerTextHeading}>Pokédex</Text>
                    <Text style={styles.InnerText}>Pokédex was invented by Professor Oak.</Text>
                </View>
            </View>
        </GestureRecognizer>
    );
};

export default FirstScreen;
