import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.png';

import './style.css';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <p>Há muito tempo, numa galáxia muito, muito distante...</p>
        <p className="App-intro">
          Guerra! A República está desmoronando<br />
          com os ataques do cruel<br />
          Lorde Sith, Conde Dookan.<br />
          Existem heróis em ambos os lados.<br />
          O Mal está em toda a parte.<br /><br />

          Crie seu personagem abaixo para acabar com essa palhaçada!
        </p>
        <Link to="/pagina_nome">
          <button className="botao-criar" >Criar Personagem</button>
        </Link>
      </div>
    );
  }
}

export default Home;
