import React, { Component } from 'react';
import luke from '../../imgs/luke.jpg';

import Personagem from '../Personagem';
import axios from 'axios';

import './Personagem.css';

class Luke extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dadosPersonagem: [],

        };

    }

    async componentWillMount() {
        // requisicao HTTP
        await axios.get('https://swapi.co/api/people/1')
            .then(response => { this.setState({ dadosPersonagem: response.data }); })
            .catch(() => { console.log('Erro ao realizar requisicao!!!') });
    }

    render() {
        return (
            <div>
                <p className="BemVindo">Bem Vindo!</p>
                <img src={luke} className="Personagem-logo" alt="logo-luke" />
                <Personagem key={this.state.dadosPersonagem.name} item={this.state.dadosPersonagem} />
            </div>

        );
    }
}

export default Luke;
