/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import {HelperStyles} from '../../HelperStyles';
import Icon from 'react-native-vector-icons/Feather';
import GestureRecognizer from 'react-native-swipe-gestures';

export default function OnBoardingScreen({navigation}) {
    const [OnboardNumber, setNumber] = useState(1);

    const onSwipeRight = () => {
        if (OnboardNumber !== 3){
            setNumber(OnboardNumber + 1);
        }
        console.log(OnboardNumber);
    };
    const onSwipeleft = () => {
        if (OnboardNumber !== 1){
            setNumber(OnboardNumber - 1);
        }
        console.log(OnboardNumber);
    };

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80,
    };

    const SecondScreen = () => {
        return (
            <GestureRecognizer
                onSwipeLeft={() => onSwipeRight()}
                onSwipeRight={() => onSwipeleft()}
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

    const ThirdScreen = () => {
        return (
            <GestureRecognizer
                onSwipeLeft={() => onSwipeRight()}
                onSwipeRight={() => onSwipeleft()}
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

    const FirstScreen = () => {
        return (
            <GestureRecognizer
                onSwipeLeft={() => onSwipeRight()}
                onSwipeRight={() => onSwipeleft()}
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

    return (
        <View style={HelperStyles.Container}>
            <Text onPress={() => navigation.navigate('Home')} style={styles.Skip}>Skip</Text>
            <View style={styles.Heading}>
                <Text style={styles.WelcomeText}>Welcome to</Text>
                <Text style={styles.HeadingText}>Pokédex</Text>
            </View>
            <View style={styles.onBoard}>
                {
                    OnboardNumber === 1 ? (
                        <FirstScreen />
                    ) : OnboardNumber === 2 ? (
                        <SecondScreen />
                    ) : (
                        <ThirdScreen />
                    )
                }
            </View>
            <View style={styles.Indices}>
                <View style={[styles.Index, OnboardNumber === 1 ? {backgroundColor : '#fe0000'} : {backgroundColor : '#e2e2e2'}]} />
                <View style={[styles.Index, OnboardNumber === 2 ? {backgroundColor : '#fe0000'} : {backgroundColor : '#e2e2e2'}]} />
                <View style={[styles.Index, OnboardNumber === 3 ? {backgroundColor : '#fe0000'} : {backgroundColor : '#e2e2e2'}]} />
            </View>
            {
               OnboardNumber === 1 ? (
                    <Pressable style={styles.Next} onPress={() => onSwipeRight()}>
                        <Icon name="arrow-right-circle" size={40} color="#fe0000" />
                    </Pressable>
                ) : OnboardNumber === 2 ? (
                    <View style={styles.Actions}>
                        <Pressable style={styles.Previous} onPress={() => onSwipeleft()}>
                            <Icon name="arrow-left-circle" size={40} color="#fe0000" />
                        </Pressable>
                        <Pressable style={styles.NextState} onPress={() => onSwipeRight()}>
                            <Icon name="arrow-right-circle" size={40} color="#fe0000" />
                        </Pressable>
                    </View>
                ) : (
                    <View style={styles.ActionButtons}>
                        <Pressable style={styles.Button} onPress={() => navigation.navigate('SignUp')}>
                            <Text style={styles.ButtonText}>Create Account</Text>
                        </Pressable>
                        <Text style={styles.ActionText}>Already have an account? <Text onPress={() => navigation.navigate('Login')} style={styles.Login}>Login!</Text></Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    Heading: {
      paddingTop: 20,
    },
    WelcomeText: {
        fontSize: 20,
        fontWeight: '400',
        color: '#00041f',
    },
    HeadingText: {
        fontSize: 40,
        fontWeight: '800',
        color: '#fe0000',
    },
    onBoardImage: {
        width: '100%',
        resizeMode: 'contain',
    },
    onBoard: {
        marginTop: 30,
        marginHorizontal: 30,
        display: 'flex',
        height: 400,
    },
    Skip: {
        position: 'absolute',
        top: 20,
        right: 20,
        fontSize: 14,
        fontWeight: '500',
    },
    Indices: {
        marginVertical: 20,
        marginHorizontal: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Index: {
        height: 10,
        width: 10,
        backgroundColor: '#E2E2E2',
        borderWidth: 0,
        borderRadius: 5,
        marginHorizontal: 5,
        elevation: 3,
    },
    Next: {
        alignSelf: 'flex-end',
        marginTop: 'auto',
        marginBottom: 10,
    },
    Actions: {
        marginTop: 'auto',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    gesture: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    Inner: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    InnerImage: {
        width: 360,
        resizeMode: 'contain',
    },
    InnerView: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -20,
        width: '100%',
    },
    InnerTextHeading: {
        fontSize: 28,
        fontWeight: '700',
        color: '#17171B',
    },
    InnerText: {
        color: '#747476',
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },
    ActionButtons: {
        marginTop: 'auto',
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    Button: {
        borderRadius: 8,
        backgroundColor: '#fe0000',
        width: '80%',
        paddingVertical: 10,
    },
    ButtonText: {
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
    },
    ActionText: {
        fontSize: 14,
        color: '#747476',
        textAlign: 'center',
        marginTop: 5,
    },
    Login: {
        fontSize: 14,
        fontWeight: '700',
        color: '#17171B',
    },
  });
