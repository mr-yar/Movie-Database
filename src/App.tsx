import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {ThemeProvider} from 'styled-components';
import {Loader} from './components/Loader/Loader';
import {RootState} from './store';
import {loadSelectedMovieAction} from './store/modules/selectedMovie/actions';
import {loadLastMoviesAction} from './store/modules/movies/actions';
import {Routes} from './services/routes';
import {GlobalStyle} from './styles/global.styles';
import {darkTheme, lightTheme} from './styles/theme';
import {Fonts} from './styles/fonts';

function App(): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.moviesReducer.movies);
  const selectedMovie = useSelector(
    (state: RootState) => state.selectedMovieReducer.selectedMovie
  );

  const selectedTheme = useSelector(
    (state: RootState) => state.themeModeReducer.selectedTheme
  );

  const isEmpty = movies.length === 0;

  if (isEmpty) {
    dispatch(loadLastMoviesAction());
  }

  if (!isEmpty && !selectedMovie.id) {
    dispatch(loadSelectedMovieAction(movies[0].id));
  }

  return (
    <ThemeProvider theme={selectedTheme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Fonts />
      <Router>
        <div className="app">
          {isEmpty ? <Loader /> : <Routes selectedMovie={selectedMovie} />}
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
