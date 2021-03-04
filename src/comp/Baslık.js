import React from 'react';
import {View, Text} from 'react-native';

const Baslık = ({headerText}) => {
    const {textStyle,Viewstyle} =Styles;
    return (
        <View style = {Viewstyle}>
            <Text style = {textStyle} > {headerText} </Text>
        </View>
    );
};

const Styles = {
    textStyle:{
        fontSize:20,
        // fontFamily:'Times New Roman'
    },
    Viewstyle:{
        height:50,
        backgroundColor:'#fff',
        justifyContent: 'center',
        alignItems: 'center',
        // shadowColor: 'black',
        // shadowOffset: { width:0, height:2 },
        // shadowOpacity: 0.1,
        // shadowRadius: 2,
        elevation: 4,
    }
}

export default Baslık;
