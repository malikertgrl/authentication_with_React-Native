import React from 'react';
import {View} from 'react-native';

const Cardsection = (props) => {
    return (
        <View style ={Styless.subContainerStyle}>
            {props.children}
        </View>
    );

};

const Styless = {
     
    subContainerStyle: {
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
        
    },
}

export default Cardsection ;