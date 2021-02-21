import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {RootState} from './redux/reducers/rootReducer';

import {loadTheLastMoviesAction} from './redux/actions';

import {Nav} from './components/Nav/Nav';
import {Header} from './components/Database/Header/Header';
import {Movies} from './components/Database/Movies/Movies';
import {Searcher} from './components/Database/Searcher/Searcher';
import {Movie} from './components/Movie/Movie';
import './styles/main.sass';
import {Loader} from './components/Loader/Loader';

function App(): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  const isFetchingMovies = useSelector(
    (state: RootState) => state.moviesReducer.loading
  );
  if (movies.length === 0) {
    dispatch(loadTheLastMoviesAction());
  }

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
            {isFetchingMovies ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                <Nav />
                <Header />
                <Searcher />
                <Movies />
              </>
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
