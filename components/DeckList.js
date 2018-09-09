import React, {Component} from 'react';
import {AppLoading} from 'expo';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import _ from 'lodash';

import {blue, green, red, white} from '../utils/colors';
import {clearDecks, getDecks} from '../utils/api';
import Deck from './Deck';

class DeckList extends Component {
    state = {
        hasLoaded: false
    }

    addDeckNav = () => {
        this.props.navigation.navigate('AddDeck');
    }

    componentDidMount() {
        this._sub = this.props.navigation.addListener(
            'didFocus',
            () => getDecks().then(decks => {
                this.setState({
                    decks,
                    hasLoaded: true
                })
            })
        )
    }

    deckDetailNav = id => {
        this.props.navigation.navigate(
            'DeckDetail',
            {id}
        )
    }

    reset = () => {
        clearDecks();
        getDecks().then(decks => this.setState({decks}))
    }

    render() {
        const {hasLoaded} = this.state;

        if (!hasLoaded) {
            return <AppLoading />
        }

        const {decks} = this.state;
        const sortedDecks = _(decks)
            .map(deck => {
                const {createDate, id, questions, title} = deck;

                return {
                    createDate,
                    id,
                    numQs: questions ? questions.length : 0,
                    title
                }
            })
            .sortBy('createDate')
            .reverse()
            .valueOf();

        const isLastChild = id => _.get(_.last(sortedDecks), 'id') === id;

        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>DECKS</Text>
                    </View>
                    <ScrollView style={styles.deckContainer}>
                        {decks && _.map(sortedDecks, deck => (
                            <TouchableOpacity
                                key={deck.id}
                                onPress={() => this.deckDetailNav(deck.id)}
                            >
                                <Deck
                                    key={deck.id}
                                    isLastChild={isLastChild(deck.id)}
                                    numQs={deck.numQs}
                                    title={deck.title}
                                />
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
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
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    container: {
        alignItems: 'center',
        flex: 1,
    },
    deckContainer: {
        // flex: 1,
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
        width: '100%',
    },
    topContainer: {
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
})

export default DeckList;
