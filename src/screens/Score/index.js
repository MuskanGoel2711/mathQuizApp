import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Score = ({route, navigation}) => {
    const {scoreNumber,name} = route.params;
    console.log(scoreNumber);
    const insets = useSafeAreaInsets();
    return(
        <View style={[styles.container,{paddingTop: insets.top}]}>
            <Text style={styles.score}>Score Tracker</Text>
            <Text style={styles.scoreName}>Name : {name}</Text>
            <Text style={styles.scoreNumber}>ScoreNumber  :  {scoreNumber}</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Level')} style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Score;

