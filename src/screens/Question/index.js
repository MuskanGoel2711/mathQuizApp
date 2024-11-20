import React, {useState} from 'react';
import {View, Text,TextInput, TouchableOpacity} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';

const Question = ({route,navigation}) => {
    const {name} = route.params;
    const insets = useSafeAreaInsets();
    const [number, setNumber] = useState();
    const handleSubmit = () => {
        if(number>0){
            navigation.navigate('HomeScreen',{numberOfQuestions: number, name: name})
        }
    }
    return(
        <View style={[styles.container, {paddingTop: insets.top}]}>
            <Text style={styles.text}>Select No. of Questions</Text>
            <TextInput
                placeholder="Enter No. Of Questions" 
                value={number}
                onChangeText={(value)=> setNumber(value)}
                style={styles.input}
                placeholderTextColor='white'
                keyboardType='phone-pad'
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Next</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Question;

