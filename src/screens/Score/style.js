import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#faeecd'
    },
    score: {
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#e37302',
    },
    scoreName: {
        fontSize: 20,
        margin: 25,
        color: '#b06202',
        fontWeight: 500
    },
    scoreNumber: {
        fontSize: 20,
        marginLeft: 25,
        marginBottom: 20,
        color: '#b06202',
        fontWeight: 500
    },
    buttonContainer: {
        backgroundColor: '#f0ae5d',
        borderRadius: 100,
        padding: 20,
        margin: 20
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 18
    },
})

export default styles;