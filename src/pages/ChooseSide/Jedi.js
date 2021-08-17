import React, { Component } from 'react';
import luke from '../../imgs/luke.jpg';
import leia from '../../imgs/leia.png';
import './style.css';

import './ListaPersonagem.css';

import { Link } from 'react-router-dom';

export default class Jedi extends Component {

  // {this.state.listaPersonagem.map(item => (<Personagem key={item.name} item={item} />))}

  render() {
    return (
      <div className="ListaPersonagem">

        <p className="Intro">Escolha um Personagem</p>

        <Link to="/luke">
          <img src={luke} className="PersonagemLogo" alt="logo-luke" />
        </Link>

        <Link to="/leia">
          <img src={leia} className="PersonagemLogo" alt="logo-leia" />
        </Link>

      </div>
    );
  }

}
