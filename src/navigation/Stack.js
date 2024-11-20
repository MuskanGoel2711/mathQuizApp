import React from 'react';
import SplashScreen from '../screens/SplashScreen/index';
import HomeScreen from '../screens/HomeScreen/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Question from '../screens/Question'
import Score from '../screens/Score/index';
import Level from '../screens/Level';

const Stack = createNativeStackNavigator();

const NativeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ gestureEnabled: false }} />
                <Stack.Screen name="Level" component={Level} options={{ gestureEnabled: false }} />
                <Stack.Screen name="Question" component={Question} options={{ gestureEnabled: false }} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ gestureEnabled: false }} />
                <Stack.Screen name="Score" component={Score} options={{ gestureEnabled: false }} />
                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NativeStack;
