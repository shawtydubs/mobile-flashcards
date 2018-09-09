import React, {Component} from 'react';
import {AppLoading} from 'expo';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {getDeck} from '../utils/api';
import {green, red, white} from '../utils/colors';

class Quiz extends Component {
    state = {
        hasLoaded: false,
        isFinalQuestion: false,
        num: 1,
        question: true,
        score: 0
    }

    componentDidMount() {
        const {id} = this.props.navigation.state.params;

        this._sub = this.props.navigation.addListener(
            'didFocus',
            () => getDeck(id).then(deck => {
                this.setState({
                    deck,
                    hasLoaded: true
                })
            })
        )
    }

    nextQuestion = (correct) => {
        const {deck: {questions}, num, score} = this.state;

        const newScore = correct ? score + 1 : score;
        const newNum = num === questions.length ? num : num + 1;
        const isFinalQuestion = newNum === num ? true : false;

        this.setState((state) => {
            return {
                ...state,
                isFinalQuestion,
                num: newNum,
                question: true,
                score: newScore
            }
        });
    }

    toggleQuestion = () => {
        const {question} = this.state;

        this.setState({question: !question})
    }

    render() {
        const {hasLoaded, isFinalQuestion} = this.state;

        if (!hasLoaded) {
            return <AppLoading />
        }

        if (isFinalQuestion) {
            const {deck: {questions}, score} = this.state;
            const percentage = Math.round(score / questions.length * 100);

            return (
                <View style={styles.scoreContainer}>
                    <Text style={styles.quiz}>Score</Text>
                    <Text style={styles.score}>{percentage} %</Text>
                </View>
            )
        }

        const {deck: {questions}, num, question} = this.state;
        const index = num - 1;
        const numQs = questions.length;
        const quizText = question ? questions[index].question : questions[index].answer;
        const btnText = question ? 'Answer' : 'Question';

        return (
            <View style={styles.container}>
                <Text style={styles.count}>{num}/{numQs}</Text>
                <Text style={styles.quiz}>{quizText}</Text>
                <TouchableOpacity onPress={this.toggleQuestion}>
                    <Text>{btnText}</Text>
                </TouchableOpacity>
                <View style={styles.btnContainer}>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: green}]}
                        onPress={() => this.nextQuestion(true)}
                    >
                        <Text style={styles.btnText}>Correct</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btn, {backgroundColor: red}]}
                        onPress={() => this.nextQuestion(false)}
                    >
                        <Text style={styles.btnText}>Incorrect</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        borderRadius: 5,
        height: 60,
        justifyContent: 'center',
        margin: 15,
        width: 220
    },
    btnContainer: {
        margin: 30
    },
    btnText: {
        color: white,
        fontSize: 16
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between'
    },
    count: {
        alignSelf: 'flex-start',
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
    quiz: {
        fontSize: 40
    },
    score: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 20
    },
    scoreContainer: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})

export default Quiz;
