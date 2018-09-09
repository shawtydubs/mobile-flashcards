import React, {Component} from 'react';
import {
    KeyboardAvoidingView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
} from 'react-native';

import {black, blue, white} from '../utils/colors';
import {saveCard} from '../utils/api';

class AddCard extends Component {
    state = {
        answer: '',
        question: '',
    };

    clearState = () => {
        this.setState({
            answer: '',
            question: '',
        });
    };

    handleAnswerChange = value => {
        this.setState((state) => {
            return {
                ...state,
                answer: value,
            }
        })
    };

    handleQuestionChange = value => {
        this.setState((state) => {
            return {
                ...state,
                question: value,
            }
        })
    };

    submitCard = () => {
        const {answer, question} = this.state;
        const {id} = this.props.navigation.state.params;

        saveCard(id, answer.trim(), question.trim());
        this.clearState();
        this.props.navigation.goBack();
    };

    render() {
        const disableBtn = this.state.answer.trim() === ''
            || this.state.question.trim() === '';

        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <Text style={styles.title}>Question</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleQuestionChange}
                    value={this.state.question}
                />
                <Text style={styles.title}>Answer</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={this.handleAnswerChange}
                    value={this.state.answer}
                />
                <TouchableOpacity
                    style={styles.submitBtn}
                    onPress={this.submitCard}
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
        padding: 20,
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
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5
    }
});

export default AddCard;
