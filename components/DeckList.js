import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

class DeckList extends Component {
    render() {
        return (
            <View>
                <Text style={styles.title}>DECKS</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 36
    }
})

export default DeckList;
