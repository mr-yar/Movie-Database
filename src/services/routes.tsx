import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Database} from '../pages/Database/Database';
import {SelectedMovie} from '../pages/SelectedMovie/SelectedMovie';
import {Nav} from '../components/Nav/Nav';
import {TSelectedMovie} from '../common/types';
import {Header} from '../components/Header/Header';
import {Searcher} from '../components/Searcher/Searcher';
import {MoviesSearcher} from '../components/Movies/MoviesSearcher/MoviesSearcher';

export const Routes = ({selectedMovie}: {
  selectedMovie: TSelectedMovie;
}): JSX.Element => (
  <Switch>
    <Route exact path="/">
      <Database movie={selectedMovie} />
    </Route>
    <Route exact path="/search">
      <>
        <Nav />
        <Header movie={selectedMovie} />
        <Searcher />
        <MoviesSearcher />
      </>
    </Route>
    <Route exact path="/movie">
      <SelectedMovie movie={selectedMovie} />
    </Route>
  </Switch>
);
