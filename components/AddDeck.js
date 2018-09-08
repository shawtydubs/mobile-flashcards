import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {black} from '../utils/colors';
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

    submitTitle = async() => {
        const id = createId();
        const {value} = this.state;

        saveDeck(id, value);
        this.clearState();
        // TODO: navigate to Home
    };

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleTextChange}
                    value={this.state.value}
                />
                <TouchableOpacity onPress={this.submitTitle}>
                    <Text>SUBMIT</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
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
