import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress,children}) => {
    const {textt, buttonstyle} = Stiller;
    return(
        <TouchableOpacity  onPress = {onPress} style = {buttonstyle} >
              <Text style = {textt}>{children} </Text>
        </TouchableOpacity>
      
    );
};

const Stiller = {
    textt:{
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        alignSelf:'center',
        paddingTop:5,
        paddingBottom:5
       
          },
    buttonstyle:{
        // marginTop:10,
        flex:1,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 10,
        marginRight: 10
    }

};

export default Button;