import React, { Component } from 'react';
import darth from '../../imgs/darth.png';

import Character from '.';
import axios from 'axios';

class Darth extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dadosPersonagem: [],
    };

  }

  async componentWillMount() {
    await axios.get('https://swapi.co/api/people/4')
      .then(response => { this.setState({ dadosPersonagem: response.data }); })
      .catch(() => { console.log('Erro ao realizar requisicao!!!') });
  }

  render() {
    return (
      <div>
        <p className="BemVindo">Bem Vindo ao Lado Negro da Força!</p>
        console.log("teste"{this.props.nome})
        <img src={darth} className="Personagem-logo" alt="logo-darth" />
        <Character key={this.state.dadosPersonagem.name} item={this.state.dadosPersonagem} />
      </div>

    );
  }
}

export default Darth;
