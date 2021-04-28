import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {Database} from '../pages/Database/Database';
import {SelectedMovie} from '../pages/SelectedMovie/SelectedMovie';
import {Nav} from '../components/Nav/Nav';
import {Movie} from '../components/Movie/Movie';
import {ISelectedMovie} from '../common/types';

export const Routes = ({selectedMovie}: {
  selectedMovie: ISelectedMovie;
}): JSX.Element => (
  <Switch>
    <Route exact path="/database">
      <Database movie={selectedMovie} />
    </Route>
    <Route exact path="/database/selectedmovie">
      <SelectedMovie movie={selectedMovie} />
    </Route>
    <Route exact path="/movie">
      <>
        <Nav />
        <Movie movie={selectedMovie} />
      </>
    </Route>
    <Route exact path="/">
      <Database movie={selectedMovie} />
    </Route>
  </Switch>
);
