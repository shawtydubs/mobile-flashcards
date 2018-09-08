import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {blue, red, white} from '../utils/colors';
import Deck from './Deck';

class DeckList extends Component {
    addDeckNav = () => {
        this.props.navigation.navigate('AddDeck');
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.deckContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>DECKS</Text>
                    </View>
                    <Deck />
                </View>
                <TouchableOpacity style={styles.addBtn} onPress={this.addDeckNav}>
                    <Text style={styles.btnText}>+</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addBtn: {
        alignItems: 'center',
        alignSelf: 'flex-end',
        backgroundColor: red,
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        margin: 30,
        width: 70,
    },
    btnText: {
        color: white,
        fontSize: 30
    },
    container: {
        alignItems: 'center',
        flex: 1,
    },
    deckContainer: {
        alignItems: 'center',
        flex: 1,
        width: '100%'
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
