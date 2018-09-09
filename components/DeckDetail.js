import React, {Component} from 'react';
import {AppLoading} from 'expo';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {black, gray, white} from '../utils/colors';
import {getDeck} from '../utils/api';

class DeckDetails extends Component {
    state = {
        hasLoaded: false
    }

    componentDidMount() {
        const {id} = this.props.navigation.state.params;

        this._sub = this.props.navigation.addListener(
            'didFocus',
            () => getDeck(id).then(deck => {
                this.setState({
                    deck,
                    hasLoaded: true
                })
            })
        )
    }

    addCardNav = id => {
        this.props.navigation.navigate(
            'AddCard',
            {id}
        )
    }

    render() {
        const {hasLoaded} = this.state;

        if (!hasLoaded) {
            return <AppLoading />
        }

        const {deck: {id, questions, title}} = this.state;
        const numQs = questions.length;
        const units = numQs === 1 ? 'card' : 'cards';

        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.cardCount}>{numQs} {units}</Text>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btn} onPress={() => this.addCardNav(id)}>
                        <Text style={styles.btnText}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn, {backgroundColor: black}]}>
                        <Text style={[styles.btnText, {color: white}]}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderColor: black,
        borderRadius: 5,
        borderWidth: 2,
        height: 60,
        justifyContent: 'center',
        margin: 15,
        width: 220
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    btnText: {
        fontSize: 16
    },
    cardCount: {
        color: gray,
        fontSize: 20
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-around'
    },
    textContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 30
    }
})

export default DeckDetails;
