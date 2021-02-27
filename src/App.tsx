import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {loadSelectedMovieAction} from './redux/reducers/selectedMovieReducer';
import {loadLastMoviesAction} from './redux/reducers/moviesReducer';
import {Nav} from './components/Nav/Nav';
import {Header} from './components/Database/Header/Header';
import {Movies} from './components/Database/Movies/Movies';
import {Searcher} from './components/Database/Searcher/Searcher';
import {Movie} from './components/Movie/Movie';
import {Loader} from './components/Loader/Loader';
import {SearchMovies} from './components/Database/Movies/SearchMovies';
import './styles/main.sass';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  if (movies.length === 0) {
    dispatch(loadLastMoviesAction());
  }
  const isFetchingMovies = useSelector(
    (state: RootState) => state.moviesReducer.loading
  );

  const movie = useSelector(
    (state: RootState) => state.selectedMovieReducer.selectedMovie
  );
  if (!isFetchingMovies) {
    if (Object.keys(movie).length === 0) {
      dispatch(loadSelectedMovieAction(movies[0].id));
    }
  }
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/database">
            {isFetchingMovies ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                <Nav />
                <Header movie={movie} />
                <Searcher />
                <Movies />
              </>
            )}
          </Route>
          <Route exact path="/database/selectedmovie">
            {isFetchingMovies ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                <Nav />
                <Header movie={movie} />
                <Searcher />
                <SearchMovies />
              </>
            )}
          </Route>
          <Route exact path="/movie">
            {isFetchingMovies ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                <Nav />
                <Movie movie={movie} />
              </>
            )}
          </Route>
          <Route exact path="/">
            {isFetchingMovies ? (
              <div>
                <Loader />
              </div>
            ) : (
              <>
                <Nav />
                <Header movie={movie} />
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
