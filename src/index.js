import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'

import './index.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>,
  document.getElementById("root")
);

registerServiceWorker();
