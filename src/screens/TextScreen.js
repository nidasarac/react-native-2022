import React, {useState} from "react";
import { View, Text , StyleSheet, TextInput } from "react-native-web";

const TextScreen = () => {
const [name, setName] =useState ('');

 return (
    <View>
        <Text>Enter name:</Text>
        <TextInput
            style={styles.input}
            autoCorrect={false}
            autoCapitalize="none"
            value={name}
            onChangeText={newValue => setName(newValue)}
        />
        <Text>My name is {name}</Text>
        {false ? <Text>That was true</Text> : null}
    </View>
 );
};


const styles = StyleSheet.create({
    input : {
        margin:15,
        borderCoLor: 'black',
        borderWidth:1
       // value='hi there'
    }
});
  
export default TextScreen;