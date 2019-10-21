import React from 'react';

import {
    View,
    Button, 
    TextInput
} from 'react-native';

const Login = (props) => {
    const {
        cambiarpantalla,
        changeDtext,
        texto
    }=props;

    return(
        <View>
            <View>
                <TextInput
                placeholder = 'nombre de usuario'
                onChangeText = {changeDtext}
                defaultValue = {texto}/>
                </View>
            <Button title ='Guardar'
            color = 'blue'
            onPress = {
                () => {
                    cambiarpantalla('inicio');
                }
            }
            />
            </View>    
    );
};

export default Login;