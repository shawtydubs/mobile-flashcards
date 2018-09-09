import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import {StackActions, NavigationActions} from 'react-navigation';

import {black, blue, white} from '../utils/colors';
import {createId} from '../utils/helpers';
import {saveDeck} from '../utils/api';

class AddDeck extends Component {
    state = {
        value: ''
    };

    clearState = () => {
        this.setState({value: ''});
    };

    handleTextChange = value => {
        this.setState({value});
    };

    navigateToDeck = id => {
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({
                    routeName: 'DeckList'
                }),
                NavigationActions.navigate({
                    routeName: 'DeckDetail',
                    params: {id}
                })
            ]
        });

        this.props.navigation.dispatch(resetAction);
    }

    submitTitle = () => {
        const id = createId();
        const {value} = this.state;

        saveDeck(id, value.trim());
        this.clearState();

        this.navigateToDeck(id);
    };

    render() {
        const disableBtn = this.state.value.trim() === '';

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleTextChange}
                    value={this.state.value}
                />
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.submitTitle}
                    disabled={disableBtn}
                >
                    <Text style={styles.btnText}>SUBMIT</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    btnText: {
        color: white,
        fontSize: 16
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    submitBtn: {
        backgroundColor: blue,
        borderRadius: 10,
        padding: 20
    },
    textInput: {
        borderColor: black,
        borderWidth: StyleSheet.hairlineWidth,
        height: 40,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 50,
        width: '80%',
    },
    title: {
        fontSize: 40,
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
        textAlign: 'center',
    }
});

export default AddDeck;
