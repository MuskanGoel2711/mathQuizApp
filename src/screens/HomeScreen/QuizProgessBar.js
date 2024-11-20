import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const QuizProgress = ({numberOfQuestions,numberOfPlays}) => {
    const progress = (numberOfPlays+1)/numberOfQuestions;
    return(
        <View style={styles.container}>
            <View style={[styles.progress,{width: `${progress*100}%`}]}/>
            <Text style={styles.text}>
                Question {numberOfPlays + 1} of {numberOfQuestions}
            </Text>
        </View>
    )
}

export default QuizProgress;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: 30,
        alignItems: 'center'
    },
    progress: {
        height: 10,
        backgroundColor: '#f0ae5d',
        borderRadius: 5,
        marginBottom: 5,
        width: '0%'
    },
    text: {
        textAlign: 'center'
    }
})