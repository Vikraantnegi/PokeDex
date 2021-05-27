/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const SecondScreen = ({styles, swipeLeft, swipeRight, config}) => {
    return (
        <GestureRecognizer
            onSwipeLeft={() => swipeLeft()}
            onSwipeRight={() => swipeRight()}
            config={config}
            style={styles.gesture}
            >
                <View style={styles.Inner}>
                    <Image source={require('../../assets/charizard.png')} style={styles.InnerImage} />
                    <View style={styles.InnerView}>
                        <Text style={styles.InnerTextHeading}>Pokémon Fandom</Text>
                        <Text style={styles.InnerText}>Find every single detail of {'\n'} any pokémon you want.</Text>
                    </View>
                </View>
        </GestureRecognizer>
    );
};

export default SecondScreen;
