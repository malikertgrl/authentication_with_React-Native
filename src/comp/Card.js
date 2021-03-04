import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
    return (
        <View style= {Styless.containerStyle}>
            {props.children}
        </View>

    );
};

const Styless = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor:'#ddd',
        borderBottomWidth: 0,
       //  yorum satırı içindekiler ios için shadow kodları android için gerek yok
       //  shadowColor: '#000',
       //  shadowOffset: { width:0, height:2 },
       //  shadowOpacity: 0.1,
       //  shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 30
    }
};

export default Card;