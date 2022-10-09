import React from 'react';
import {Text,StyleSheet,View} from 'react-native';

const ComponentsScreen = () =>{
    const name = 'nida';
    return (
    <View>
        <Text style={styles.textStyle}>This is component screen</Text>
        <Text style={styles.textStyle}>Hi there!</Text>
        <Text style={styles.subHeaderStyle}>My name is {name} </Text>

    </View>
    );
};



const styles = StyleSheet.create(
    {
        textStyle : {
            fontSize:30
        },
        subHeaderStyle: {
            fontSize :20
        }
    }
);

export default ComponentsScreen;


