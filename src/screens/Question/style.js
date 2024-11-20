import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#faeecd',
        alignItems: 'center'
    },
    text: {
        fontSize: 23,
        fontWeight: 'bold',
        paddingVertical: 23,
        color: '#e37302'
    },
    input: {
        height: 50,
        width: '90%',
        // borderStyle: 'double',
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
    buttonContainer: {
        backgroundColor: '#f0921f',
        borderRadius: 100,
        padding: 20,
        width: '30%',
    },
    buttonText: {
        textAlign: 'center',
        color: 'white'
    },
})

export default styles;