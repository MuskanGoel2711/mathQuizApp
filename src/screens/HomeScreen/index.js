import React, { useState, useEffect } from 'react';
import { View, Text, Button, Image, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { vh, vw } from '../../utils/Dimensions';
import QuizProgress from './QuizProgessBar';
import styles from './style';

const HomeScreen = ({ route, navigation }) => {
    const { numberOfQuestions, name } = route.params;
    const insets = useSafeAreaInsets();
    const [question, setQuestion] = useState({});
    const [rightAnswers, setRightAnswers] = useState(0);
    const [wrongAnswers, setWrongAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [numberOfPlays, setNumberOfPlays] = useState(0);
    const [clockTimer, setClockTimer] = useState(0);
    const operator = ['+', '-', '*', '/'];

    const handleTimer = () => {
        setClockTimer(30);
    };

    useEffect(()=>{
        if(clockTimer>0){
            const countdown=setInterval(()=>{
                setClockTimer((prevTimer)=>prevTimer-1);
            },1000);
            return()=>clearInterval(countdown);
        }
    },[clockTimer]);

    useEffect(() => {
        startFreshQuestion()
    }, []);


    const startFreshQuestion = () => {
        const number1 = Math.floor(Math.random() * 10) + 1;
        const number2 = Math.floor(Math.random() * 10) + 1;
        const randomOperator = operator[Math.floor(Math.random() * operator.length)];
        let rightAns;
        switch (randomOperator) {
            case '+':
                rightAns = number1 + number2;
                break;
            case '-':
                rightAns = number1 - number2;
                break;
            case '*':
                rightAns = number1 * number2;
                break;
            case '/':
                rightAns = number1 / number2;
                break;
        }
        const wrongAnswer1 = rightAns + Math.floor(Math.random() * 5) + 1;
        const wrongAnswer2 = rightAns - Math.floor(Math.random() * 5) + 1;

        setQuestion({ number1, number2, randomOperator });
        setRightAnswers(rightAns);
        setWrongAnswers([wrongAnswer1, wrongAnswer2]);
    };

    const randomArray = (array) => {
        return array.sort(() => Math.random() - 0.5);
    };

    const activeAnswer = (answer) => {
        if (Number(numberOfQuestions) >= Number(numberOfPlays+ 2)) {
            if (answer === rightAnswers) {
                setScore(prev => prev + 1);
                console.log('1234567892345678', score)
                alert('Congratulations! Correct answer!');
                startFreshQuestion();
            } else {
                alert('Unfortunately, wrong answer. Try again.');
                startFreshQuestion();
            }
            setNumberOfPlays(numberOfPlays + 1);
            handleTimer();
        }else {
            navigation.navigate('Score', {scoreNumber: score, name: name})
        }
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <Text style={styles.quizHeader}>Math Quiz Question</Text>
            <QuizProgress numberOfPlays={numberOfPlays} numberOfQuestions={numberOfQuestions}/>
            <Text style={styles.timer}>Timer in {clockTimer}</Text>
            <View style={styles.questionBox}>
                <Text style={styles.questionText}>{`${question.number1} ${question.randomOperator} ${question.number2} = ?`}</Text>
            </View>
            <Text style={styles.optionsHeader}>Options</Text>
            {randomArray([rightAnswers, ...wrongAnswers]).map((answer, index) => (
                <Button
                    key={index}
                    title={answer.toString()}
                    onPress={() => {activeAnswer(answer)}}
                    style={styles.answerButton}
                />
            ))}
        </View>
    );
}

export default HomeScreen;

// const randomNumberInRange = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };
// const randomSecondNumberInRange = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// };

// const handleClick = () => {
//     setNum(randomNumberInRange(1, 20));
// };
// const handleSecondClick = () => {
//     setSecondNum(randomSecondNumberInRange(1, 20));
// };
