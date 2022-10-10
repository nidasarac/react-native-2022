import React,{useReducer} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import ColorCounter from './components/ColorCounter';

const COLOR_INCREMENT=15;

const reducer = (state, action) => {
    //state ==={red:number vs }
    //action === {colorToChange :'red' || 'green' || 'blue', amount:15 || -15}

    switch (action.colorToChange) {
        case 'red':
            if (state.red + action.amount >255|| state.red + action.amount<0){
            return;
        }
        case 'green':
            if (state.red + action.amount >255|| state.red + action.amount<0){
                return;
        case 'blue':
            if (state.red + action.amount >255|| state.red + action.amount<0){
                return;
        default:
            return state;
    };
};

const SquareScreen = () =>{

    const [state, dispatch] = useReducer(reducer, 
        {red :0, green:0, blue:0});

    return (
        <View>
        <ColorCounter 
        color="Red"
        onIncrease={() => dispatch({type: 'change_green',payload:COLOR_INCREMENT}) }
        onDecrease={() => dispatch({type: 'change_green',payload: -1* COLOR_INCREMENT}) }
        />
        <ColorCounter 
        color="Green"
        onIncrease={() => dispatch({type: 'change_green',payload:COLOR_INCREMENT}) }
        onDecrease={() => dispatch({type: 'change_green',payload:-1 * COLOR_INCREMENT}) }
        />
        <ColorCounter 
        color="Blue"
        onIncrease={() => dispatch({type: 'change_green',payload:COLOR_INCREMENT}) }
        onDecrease={() => dispatch({type: 'change_green',payload:-1* COLOR_INCREMENT}) }
        />  

        <Text>Red value: {state.red}</Text>
        <Text>Green value: {state.green}</Text>
        <Text>Blue value: {state.blue}</Text>

        <View
            style = {{
                    width:100,
                    height:100,
                    backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`
                }}/>
            
    
        </View>

    );
};

const styles= StyleSheet.create({});

export default SquareScreen;