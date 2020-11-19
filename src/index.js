import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Menu } from './components/Menu';
import { Pokedex } from './components/Pokedex';
import './styles/styles.scss';

const history = createBrowserHistory();

ReactDOM.render(
  <React.StrictMode>
    <div className="app-container">
      <BrowserRouter history={history}>
        <Menu />
        <Switch>
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/pokedex/:pokemon" component={Pokedex} />
          <Route path="*">
            <Redirect to="/pokedex" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
