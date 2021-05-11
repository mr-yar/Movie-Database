import React, {useContext} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {RootState} from './store';
import {Loader} from './components/Loader/Loader';
import {Routes} from './services/routes';
import {MainThemeContext} from './styles/theme';
import {GlobalStyle} from './styles/global.styles';
import './styles/fonts.css';
import {loadSelectedMovieAction} from './store/modules/selectedMovie/actions';
import {loadLastMoviesAction} from './store/modules/movies/actions';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const theme = useContext(MainThemeContext);

  const movies = useSelector((state: RootState) => state.moviesReducer.movies);
  const selectedMovie = useSelector((state: RootState) => state.selectedMovieReducer.selectedMovie);

  const isEmpty = movies.length === 0;

  if (isEmpty) {
    dispatch(loadLastMoviesAction());
  }

  if (!isEmpty && !selectedMovie.id) {
    dispatch(loadSelectedMovieAction(movies[0].id));
  }

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <div className="app">{isEmpty ? <Loader /> : <Routes selectedMovie={selectedMovie} />}</div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
