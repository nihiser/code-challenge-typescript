import * as React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Home from './pages/Home/Home';

import './globals/styles/main.scss';

const history = createBrowserHistory();


export const App = () => (
  <Router history={history}>
    <Switch>
      <Route path='/' exact component={Home}/>
    </Switch>
  </Router>
);