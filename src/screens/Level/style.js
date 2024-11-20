import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#faeecd',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: '#e37302'
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#f0ae5d',
        position: 'relative',
        marginTop: 8,
        color: 'white'
    },
    headerText: {
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 25,
        color: '#e37302'
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