import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './PaginaNome.css';
import logo from '../assets/logo.png';

class PaginaNome extends Component {

  constructor(props) {
    super(props);

    this.state = {
      campo_nome: '',
      genero: ''
    };
  }

  render() {
    return (
      <div className="Nome">
        <img src={logo} className="Nome-logo" alt="logo" />

        <p>Crie um nome para o seu personagem</p>

        <input
          className="Input"
          type="text"
          name="campo_nome"
          onChange={(nomeCampo) => this.setState({ campo_nome: nomeCampo.value })}
        />

        <form action="" className="genero">
          <input type="radio" name="gender" value="female" /> Mulher<br />
          <input type="radio" name="gender" value="male" /> Homem<br />
        </form>

        <Link to="/pagina_classe">
          <button className="botaoClasse" >Próximo</button>
        </Link>
      </div>
    );
  }
}

export default PaginaNome;
