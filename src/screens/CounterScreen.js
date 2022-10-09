import React, {useState} from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';

const CounterScreen = () =>{

    const [counter,setCounter] = useState(0);

    return (
        <View>
            <Button title ="Increase" onPress={()=> {
                setCounter(counter +1);
            }}
            />
            <Button title ="Decrease" onPress={()=> {
                setCounter(counter -1);
            }}
            />
            <Text style={styles.textStyle}>Current Count :  </Text>
            <Text style={styles.textStyle}>{counter}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle : {
        fontSize:30,
        marginHorizontal:120,
    },
});

export default CounterScreen;