import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Add from './Add';
import Edit from './Edit';
const Navigation = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false }}>
                
            <Stack.Screen name='home' component={Home}/>
            <Stack.Screen name='add' component={Add}/>
            <Stack.Screen name='edit' component={Edit}/>

                
            </Stack.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({})

export default Navigation;
