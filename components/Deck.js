import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

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
        color: '#545a63',
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 2,
        justifyContent: 'center',
        padding: 40,
    },
    title: {
        fontSize: 30
    }
})

export default Deck;
