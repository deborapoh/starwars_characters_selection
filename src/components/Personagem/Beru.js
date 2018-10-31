import React, { Component } from 'react';
import beru from '../../imgs/beru.png';

import Personagem from '../Personagem';
import axios from 'axios';

class Beru extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dadosPersonagem: [],

        };

    }

    async componentWillMount() {
        // requisicao HTTP
        await axios.get('https://swapi.co/api/people/7')
            .then(response => { this.setState({ dadosPersonagem: response.data }); })
            .catch(() => { console.log('Erro ao realizar requisicao!!!') });
    }

    render() {
        return (
            <div>
                <p className="BemVindo">Bem Vindo ao Lado Negro da Força!</p>
                <img src={beru} className="Personagem-logo" alt="logo-beru" />
                <Personagem key={this.state.dadosPersonagem.name} item={this.state.dadosPersonagem} />
            </div>

        );
    }
}

export default Beru;
