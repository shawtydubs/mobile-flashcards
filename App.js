import React from 'react';
import {Constants} from 'expo';
import {StatusBar, StyleSheet, View} from 'react-native';

import DeckList from './components/DeckList';

const UdaciStatusBar = () => {
    return (
        <View style={styles.statusBarContainer}>
            <StatusBar style={styles.statusBar} barStyle="light-content" />
        </View>
    )
}

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <UdaciStatusBar />
                <DeckList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    statusBar: {
        backgroundColor: '#3c6f9b',
    },
    statusBarContainer: {
        backgroundColor: '#3c6f9b',
        height: Constants.statusBarHeight,
    }
});
