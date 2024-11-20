import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#faeecd'
    },
    questionText: {
        color: '#363331',
        fontSize: 20
    },
    quizHeader: {
        marginBottom: 10,
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e37302'
    },
    optionsHeader: {
        paddingTop: 20,
        marginBottom: 30,
        fontWeight: 'bold',
        fontSize: 25,
        color: '#e37302'
    },
    timer: {
        paddingBottom: 20,
        textAlign: 'right'
    }
    // answerButton: {
    //     marginTop: 10,
    //     fontSize: 50,
    //     color: '#e37302'
    // }
})

export default styles;