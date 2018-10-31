import React, { Component } from 'react';
import './PaginaClasse.css';
import obiwan from '../imgs/obiwan.png';
import sith from '../imgs/sith.png';

import { Link } from 'react-router-dom';

class PaginaClasse extends Component {

    render() {
        return (
            <div className="ListaPersonagem">

                <p className="Intro">Escolha uma Classe</p>

                <Link to="/jedi">
                    <p>Jedi</p>
                    <img src={obiwan} className="PersonagemLogo" alt="logo-obiwan" />
                </Link>

                <Link to="/sith">
                    <p>Sith</p>
                    <img src={sith} className="PersonagemLogo" alt="logo-sith" />
                </Link>

            </div>
        );
    }

}

export default PaginaClasse;
