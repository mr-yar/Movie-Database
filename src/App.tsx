import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './styles/main.sass';

import {Nav} from './components/Nav/Nav';
import {Header} from './components/Database/Header/Header';
import {Movies} from './components/Database/Movies/Movies';
import {Searcher} from './components/Database/Searcher/Searcher';
import {Movie} from './components/Movie/Movie';

function App(): JSX.Element {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/database">
            <Nav />
            <Header />
            <Searcher />
            <Movies />
          </Route>
          <Route path="/movie">
            <Nav />
            <Movie />
          </Route>
          <Route path="/">
            <Nav />
            <Header />
            <Searcher />
            <Movies />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
