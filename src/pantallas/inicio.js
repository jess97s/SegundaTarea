import React from 'react';

import {
    View,
    Button, 
    Text,
} from 'react-native';

const Inicio = (props) => {
    const {
        cambiarpantalla,
        nameText,
    } = props;

    return(
        <View>
                <Text>
                    {nameText}
                </Text>
             
            <Button title ='Volver a login'
            color = 'blue'
            onPress ={
                () => {
                    cambiarpantalla('login');
                }
            }
            /> 
         </View>  
    );
};

export default Inicio;