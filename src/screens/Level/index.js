import React, {useState} from 'react';
import {View, Text, TouchableOpacity,TextInput} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import styles from './style';

const Level = ({navigation}) => {
    const insets = useSafeAreaInsets();
    const [name,setName] = useState('');
    const onHandleNormal = () => {
        if(name.length > 3)
        navigation.navigate('Question',{name: name})
    }
    const onHandleMedium = () => {
        if(name.length > 3)
        navigation.navigate('Question',{name: name})
    }
    const onHandleHard = () => {
        if(name.length > 3)
        navigation.navigate('Question',{name: name})
    }
    return (
        <View style={[styles.container,{paddingTop: insets.top}]}>
            <Text style={styles.text}>Name</Text>
            <TextInput
                placeholder="Enter Name" 
                value={name}
                onChangeText={(value)=> setName(value)}
                style={styles.input}
                placeholderTextColor='white'
            />
            <Text style={styles.headerText}>Question Level</Text>
            <TouchableOpacity onPress={onHandleNormal} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Normal Level</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleMedium} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Medium Level</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onHandleHard} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Hard Level</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Level;

