import React, {Component} from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {blue, green, red, white} from '../utils/colors';
import {clearDecks} from '../utils/api';
import Deck from './Deck';

class DeckList extends Component {
    addDeckNav = () => {
        this.props.navigation.navigate('AddDeck');
    }

    reset = () => {
        clearDecks();
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
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.deleteBtn} onPress={this.reset}>
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-trash' : 'md-trash'}
                            size={50}
                            color={white}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.addBtn} onPress={this.addDeckNav}>
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-add' : 'md-add'}
                            size={50}
                            color={white}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    addBtn: {
        alignItems: 'center',
        backgroundColor: green,
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        margin: 30,
        width: 70,
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
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
    deleteBtn: {
        alignItems: 'center',
        backgroundColor: red,
        borderRadius: 35,
        height: 70,
        justifyContent: 'center',
        margin: 30,
        width: 70,
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
