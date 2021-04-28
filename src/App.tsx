import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from './redux/store';
import {loadSelectedMovieAction} from './redux/reducers/selectedMovieReducer';
import {loadLastMoviesAction} from './redux/reducers/moviesReducer';
import {Loader} from './components/Loader/Loader';
import {Routes} from './services/routes';
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

  const selectedMovie = useSelector(
    (state: RootState) => state.selectedMovieReducer.selectedMovie
  );

  if (!isFetchingMovies) {
    if (Object.keys(selectedMovie).length === 0) {
      dispatch(loadSelectedMovieAction(movies[0].id));
    }
  }

  return (
    <Router>
      <div className="app">
        {isFetchingMovies ? <Loader /> : <Routes selectedMovie={selectedMovie} />}
      </div>
    </Router>
  );
}

export default App;
