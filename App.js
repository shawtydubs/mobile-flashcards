import React from 'react';
import {Constants} from 'expo';
import {StyleSheet, View} from 'react-native';

import DeckList from './components/DeckList';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.statusBar} />
                <DeckList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    statusBar: {
        backgroundColor: '#fff',
        height: Constants.statusBarHeight,
    }
});
