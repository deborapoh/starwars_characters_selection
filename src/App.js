import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <html>
            <body>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </header>

                    <p className>Há muito tempo, numa galáxia muito, muito distante...</p>
                    <p className="App-intro">
                        Guerra! A República está desmoronando<br />
                        com os ataques do cruel<br />
                        Lorde Sith, Conde Dookan.<br />
                        Existem heróis em ambos os lados.<br />
                        O Mal está em toda a parte.<br /><br />

                        Crie seu personagem abaixo para acabar com essa palhaçada!
                    </p>
                    <Link to="/pagina_nome">
                        <button className="botao-criar" onClick={() => console.log('pagina_nome') }>Criar Personagem</button>
                    </Link>
                </div>
            </body>
        </html>
    );
  }
}

export default App;
