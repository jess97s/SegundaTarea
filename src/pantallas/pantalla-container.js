import React, { Component } from 'react';
import Login from './login';
import Inicio from './inicio';

class pantallaContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vista: 'login',
            valor: '',
        };
    }

    cambiarpantalla = (pantalla) => {

        this.setState({
            vista: pantalla,
        });
    };

    TextoCap = (data) => {
        
        this.setState({
            valor: data, 
        });
    };

    render() {

        const { vista, valor } = this.state;

        if(vista === 'login') {
            return (
                <Login
                    cambiarpantalla={this.cambiarpantalla}
                    changeDtext={this.TextoCap}
                    texto={valor}
                />
            );
        }

        if(vista === 'inicio') {
            const {valor} = this.state
            return (
                <Inicio
                    cambiarpantalla={this.cambiarpantalla}
                    nameText={valor}
                />
            );
        }
    }
}

export default pantallaContainer;


    