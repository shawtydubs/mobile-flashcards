import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {blue, white} from '../utils/colors';
import Deck from './Deck';

class DeckList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>DECKS</Text>
                </View>
                <Deck />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
    },
    title: {
        color: white,
        fontSize: 36,
        margin: 10,
    },
    titleContainer: {
        alignItems: 'center',
        backgroundColor: blue,
        justifyContent: 'center',
        marginBottom: 50,
        width: '100%',
    },
})

export default DeckList;
