import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Deck from './Deck';

class DeckList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>DECKS</Text>
                <Deck />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        // justifyContent: 'center',
    },
    title: {
        fontSize: 36,
        marginBottom: 30,
        marginTop: 10,
    }
})

export default DeckList;
