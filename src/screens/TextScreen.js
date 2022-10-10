import React, {useState} from "react";
import { TextInput } from "react-native-gesture-handler";
import { View,Text,StyleSheet } from "react-native-web";

const TextScreen = () => {
const [name,setName] =useState ('');

 return
    <View>
        <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        value={name}
        onChangeText={newValue=>setName(newValue)}
        ></TextInput>
    </View>
};

const styles = StyleSheet.create({
    input : {
        margin:15,
        borderCoLor: 'black',
        borderWidth:1
        value='hi there'
    }
});
  
export default TextScreen;