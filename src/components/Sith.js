import React, { Component } from 'react';
import beru from '../imgs/beru.png';
import darth from '../imgs/darth.png';
import './PaginaClasse.css';

import './ListaPersonagem.css';

import { Link } from 'react-router-dom';

export default class Sith extends Component {

    render() {
        return (
            <div className="ListaPersonagem">

                <p className="Intro">Escolha um Personagem</p>

                <Link to="/beru">
                    <img src={beru} className="PersonagemLogo" alt="logo-beru" />
                </Link>

                <Link to="/darth">
                    <img src={darth} className="PersonagemLogo" alt="logo-darth" />
                </Link>

            </div>
        );
    }

}
