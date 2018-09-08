import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
        color: '#fff',
        fontSize: 36,
        margin: 10,
    },
    titleContainer: {
        alignItems: 'center',
        backgroundColor: '#4c8cc4',
        justifyContent: 'center',
        marginBottom: 50,
        width: '100%',
    },
})

export default DeckList;
