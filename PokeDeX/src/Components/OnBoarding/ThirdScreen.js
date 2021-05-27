/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

const ThirdScreen = ({styles, swipeLeft, swipeRight, config}) => {
    return (
        <GestureRecognizer
            onSwipeLeft={() => swipeLeft()}
            onSwipeRight={() => swipeRight()}
            config={config}
            style={styles.gesture}
            >
                <View style={styles.Inner}>
                    <Image source={require('../../assets/list.png')} style={styles.InnerImage} />
                    <View style={styles.InnerView}>
                        <Text style={styles.InnerTextHeading}>Set Favorites</Text>
                        <Text style={styles.InnerText}>Create a separate section for {'\n'} your favorite pokémon.</Text>
                    </View>
                </View>
        </GestureRecognizer>
    );
};

export default ThirdScreen;
