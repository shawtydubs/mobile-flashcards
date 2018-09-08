import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Constants} from 'expo';
import {StatusBar, StyleSheet, View} from 'react-native';

import AddDeck from './components/AddDeck';
import {blue, darkBlue} from './utils/colors';
import DeckList from './components/DeckList';
import {initializeStorageIfNeeded} from './utils/api';

const AddDeckNavigator = createStackNavigator(
    {
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                header: null
            }
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: {
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: blue
                }
            }
        }
    },
    {
        initialRouteName: 'DeckList'
    }
)

const UdaciStatusBar = () => {
    return (
        <View style={styles.statusBarContainer}>
            <StatusBar style={styles.statusBar} barStyle="light-content" />
        </View>
    )
}

export default class App extends Component {
    componentDidMount() {
        initializeStorageIfNeeded();
    };

    render() {
        return (
            <View style={styles.container}>
                <UdaciStatusBar />
                <AddDeckNavigator />
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
