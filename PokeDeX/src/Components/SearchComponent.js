/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Fonts } from '../HelperStyles';
import FAIcon from 'react-native-vector-icons/FontAwesome';

export default function SearchComponent({placeholder}) {
    const [input, setInput] = useState('');
    return (
        <View style={styles.Search}>
            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.textInput}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder={placeholder}
                placeholderTextColor="#747476"
                underlineColorAndroid="transparent"
            />
            <FAIcon name="search" size={20} color="#17171B" style={styles.Icon} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        fontFamily: Fonts.fontRegular,
        borderRadius: 20,
        position: 'relative',
        backgroundColor: '#F2F2F2',
        paddingLeft: 40,
        paddingRight: 20,
        color: 'black',
        zIndex: 1,
        fontSize: 17,
        marginBottom: 0,
        paddingVertical: 10,
        width: '100%',
    },
    Icon: {
        position: 'absolute',
        top: 12,
        left: 15,
        zIndex: 1,
    },
    Search: {
        marginVertical: 10,
    },
});

