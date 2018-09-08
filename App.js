import React, {Component} from 'react';
import {Constants} from 'expo';
import {StatusBar, StyleSheet, View} from 'react-native';

import {darkBlue} from './utils/colors';
import DeckList from './components/DeckList';

const UdaciStatusBar = () => {
    return (
        <View style={styles.statusBarContainer}>
            <StatusBar style={styles.statusBar} barStyle="light-content" />
        </View>
    )
}

export default class App extends Component {
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
        backgroundColor: darkBlue,
    },
    statusBarContainer: {
        backgroundColor: darkBlue,
        height: Constants.statusBarHeight,
    }
});
