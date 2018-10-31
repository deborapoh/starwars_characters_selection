import React, { Component } from 'react';
import leia from '../../imgs/leia.png';

import Personagem from '../Personagem';
import axios from 'axios';

class Leia extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dadosPersonagem: [],

        };

    }

    async componentWillMount() {
        // requisicao HTTP
        await axios.get('https://swapi.co/api/people/5')
            .then(response => { this.setState({ dadosPersonagem: response.data }); })
            .catch(() => { console.log('Erro ao realizar requisicao!!!') });
    }

    render() {
        return (
            <div>
                <p className="BemVindo">Bem Vindo!</p>
                <img src={leia} className="Personagem-logo" alt="logo-leia" />
                <Personagem key={this.state.dadosPersonagem.name} item={this.state.dadosPersonagem} />
            </div>

        );
    }
}

export default Leia;
