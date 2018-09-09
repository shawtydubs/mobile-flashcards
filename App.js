import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import {Constants} from 'expo';
import {StatusBar, StyleSheet, View} from 'react-native';

import AddCard from './components/AddCard';
import AddDeck from './components/AddDeck';
import {blue, darkBlue} from './utils/colors';
import DeckDetail from './components/DeckDetail';
import DeckList from './components/DeckList';
import {initializeStorageIfNeeded} from './utils/api';
import Quiz from './components/Quiz';
import {setLocalNotification} from './utils/helpers';

const AddDeckNavigator = createStackNavigator(
    {
        AddCard: {
            screen: AddCard,
            navigationOptions: {
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: blue
                }
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
        },
        DeckDetail: {
            screen: DeckDetail,
            navigationOptions: {
                headerBackTitle: 'Deck',
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: blue
                }
            }
        },
        DeckList: {
            screen: DeckList,
            navigationOptions: {
                headerBackTitle: 'Deck List',
                header: null,
            }
        },
        Quiz: {
            screen: Quiz,
            navigationOptions: {
                headerTintColor: '#fff',
                headerStyle: {
                    backgroundColor: blue
                }
            }
        },
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
        setLocalNotification();
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
