import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {black, gray} from '../utils/colors';

class Deck extends Component {
    render() {
        const {isLastChild, numQs, title} = this.props;
        const unit = numQs === 1 ? 'card' : 'cards';

        return (
            <View style={[
                styles.container,
                {borderBottomWidth: isLastChild ? 0 : 1}
            ]}>
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
        borderBottomWidth: 1,
        borderTopColor: black,
        justifyContent: 'center',
        padding: 40,
        width: '100%',
    },
    title: {
        fontSize: 30
    }
})

export default Deck;
