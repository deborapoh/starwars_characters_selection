import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import PaginaNome from './components/PaginaNome';
import PaginaClasse from './components/PaginaClasse';
import Jedi from './components/Jedi';
import Sith from './components/Sith';
import Luke from './components/Personagem/Luke';
import Leia from './components/Personagem/Leia';
import Beru from './components/Personagem/Beru';
import Darth from './components/Personagem/Darth';

import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(

    <BrowserRouter>
        <Switch>
            <Route path="/" exact={true} component={App} />
            <Route path="/pagina_nome" component={PaginaNome} />
            <Route path="/pagina_classe" component={PaginaClasse} />
            <Route path="/luke" component={Luke} />
            <Route path="/leia" component={Leia} />
            <Route path="/beru" component={Beru} />
            <Route path="/darth" component={Darth} />
            <Route path="/jedi" component={Jedi} />
            <Route path="/sith" component={Sith} />
        </Switch>
    </BrowserRouter>
    
    , document.getElementById('root')

);

registerServiceWorker();
