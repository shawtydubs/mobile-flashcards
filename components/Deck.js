import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {black, gray} from '../utils/colors';

class Deck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>deck title</Text>
                <Text style={styles.cardCount}>3 cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cardCount: {
        color: gray,
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        borderBottomColor: black,
        borderBottomWidth: 2,
        borderTopColor: black,
        borderTopWidth: 2,
        justifyContent: 'center',
        margin: 10,
        padding: 40,
        width: '100%',
    },
    title: {
        fontSize: 30
    }
})

export default Deck;
