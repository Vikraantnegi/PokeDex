/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView } from 'react-native';
import { Fonts, HelperStyles } from '../../HelperStyles';
import EntIcon from 'react-native-vector-icons/Entypo';
import CategoryComponent from '../../Components/HomeScreen/CategoryComponent';
import SearchComponent from '../../Components/SearchComponent';
import HomeServices from '../../Data/DataFiles/HomeServices';
import RecommendedData from '../../Data/DataFiles/RecommendedData';
import PokeCard from '../../Components/HomeScreen/PokeCard';

export default function HomeScreen({navigation}) {
    return (
        <View style={HelperStyles.Container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView} contentContainerStyle={HelperStyles.ScrollView}>
                <>
                    <View style={HelperStyles.PokeBall}>
                        <Image style={HelperStyles.PokeBall1} source={require('../../assets/Pokeball.png')} />
                        <Image style={HelperStyles.PokeBall2} source={require('../../assets/Pokeball.png')} />
                    </View>
                    <EntIcon name="menu" size={35} color="#000" style={HelperStyles.MenuIcon} onPress={() => navigation.toggleDrawer()} />
                    <View style={styles.HomeContainer}>
                        <View style={styles.Menu}>
                            <Text style={styles.MenuHeading}>Pokemon Fan?</Text>
                            <Text style={styles.MenuSubtitles}>You have come to the right place.</Text>
                            <SearchComponent placeholder="Search your favorite Pokemon here..." />
                        </View>
                        <View style={styles.CategorySection}>
                            <Text style={styles.SectionHeading}>Categories</Text>
                            <View style={styles.Services}>
                                {
                                    HomeServices.map((service, index) => (
                                        <CategoryComponent key={index} image={service.image} text={service.text} route={service.route} />
                                    ))
                                }
                            </View>
                        </View>
                        <View style={styles.RecommendedSection}>
                            <Text style={styles.SectionHeading}>Recommended</Text>
                            <View style={styles.Recommended}>
                                {
                                    RecommendedData.map((poke, index) => (
                                        <PokeCard key={index} name={poke.name} image={poke.image} species={poke.species} type={poke.type} bgColor={poke.backgroundColor} />
                                    ))
                                }
                            </View>
                        </View>
                    </View>
                </>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    HomeContainer : {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 60,
    },
    MenuHeading: {
        fontFamily: Fonts.fontBold,
        fontSize: 24,
    },
    MenuSubtitles: {
        fontFamily: Fonts.fontRegular,
        fontSize: 14,
        marginTop: -8,
    },
    Menu: {
        marginBottom: 10,
    },
    SectionHeading: {
        fontFamily: Fonts.fontBold,
        fontSize: 18,
    },
    Services: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'nowrap',
        marginVertical: 20,
    },
    Recommended: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        marginVertical: 20,
    },
});
