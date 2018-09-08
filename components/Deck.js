import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {black, gray} from '../utils/colors';

class Deck extends Component {
    render() {
        const {numQs, title} = this.props;
        const unit = numQs === 1 ? 'card' : 'cards';

        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.cardCount}>{numQs} {unit}</Text>
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
