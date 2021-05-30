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
import LoginBanner from '../../Components/HomeScreen/LoginBanner';
import PokeNewsCard from '../../Components/PokeNewsCard';
import NewsData from '../../Data/DataFiles/NewsData';
import LegendaryPokemons from '../../Data/DataFiles/LegendaryPokemons';

export default function HomeScreen({navigation}) {

    const HomeService = ({data}) => {
        return (
            <View style={styles.CategorySection}>
                <Text style={styles.SectionHeading}>Categories</Text>
                <View style={styles.Services}>
                    {
                        data.map((service, index) => (
                            <CategoryComponent key={index} image={service.image} text={service.text} route={service.route} />
                        ))
                    }
                </View>
            </View>
        );
    };

    const Recommended = ({data, text}) => {
        return (
            <View style={styles.RecommendedSection}>
                <View style={styles.SectionHead}>
                    <Text style={styles.SectionHeading}>{text}</Text>
                    <Text style={styles.ViewAll}>View All</Text>
                </View>
                <View style={styles.Recommended}>
                    {
                        data.map((poke, index) => (
                            <PokeCard key={index} name={poke.name} image={poke.image} species={poke.species} type={poke.type} bgColor={poke.backgroundColor} />
                        ))
                    }
                </View>
            </View>
        );
    };

    const News = ({data}) => {
        return (
            <View style={styles.NewsSection}>
                <View style={styles.SectionHead}>
                    <Text style={styles.SectionHeading}>Poké News</Text>
                    <Text style={styles.ViewAll}>View All</Text>
                </View>
                <View style={styles.Recommended}>
                    {
                        data.map((news, index) => (
                             <PokeNewsCard key={index} title={news.title} image={news.image} date={news.date} />
                        ))
                    }
                </View>
            </View>
        );
    };

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
                            <Text style={styles.MenuHeading}>Pokémon Fan?</Text>
                            <Text style={styles.MenuSubtitles}>You have come to the right place.</Text>
                            <SearchComponent placeholder="Search your favorite Pokémon here..." />
                        </View>
                        <HomeService data={HomeServices} />
                        <Recommended data={RecommendedData} text="Recommended" />
                        <LoginBanner />
                        <News data={NewsData} />
                        <Recommended data={LegendaryPokemons} text="Legendary Pokémons" />
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
    NewsSection : {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 30,
        marginBottom: 10,
    },
    SectionHead: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    ViewAll: {
        color: '#013d85',
        fontFamily: Fonts.fontSemi,
        fontSize: 14,
    },
});
