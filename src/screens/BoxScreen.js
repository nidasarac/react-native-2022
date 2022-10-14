import React from "react";
import { View, Text , StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <Text style={styles.textOneStyle}>Child 1</Text>
            <Text style={styles.textTwoStyle}>Child 2</Text>
            <Text style={styles.textThreeStyle}>Child 3</Text>
        </View>
    );
};

const styles= StyleSheet.create({
    viewStyle: {
        borderWidth:3,
        borderColor: 'black',
        margin:5,
        padding:5,
        backgroundColor: 'yellow',
        flexDirection: 'column',
        height:300,
        alignItems: 'center'
    },
    textOneStyle: {
        borderWidth:3,
        borderColor: 'blue',
        //flex :2,
        alignSelf: 'flex-start',
        height:100,
        width:100,
        backgroundColor: 'orange'
              
    },
    textTwoStyle: {
        borderWidth:3,
        borderColor: 'blue',
        flex :2,
        alignSelf: 'center',
        position: 'absolute',
        top: 100,
        // left:45,
        fontSize:18,
        height:100,
        width:100,
        backgroundColor: 'green'
                
    },
    textThreeStyle: {
        borderWidth:3,
        borderColor: 'blue',
        flex :2,
        position: 'absolute',
        //top:50,
        alignSelf: 'flex-end',
        height:100,
        width:100,
        backgroundColor: 'purple'       
    }
});

export default BoxScreen;