import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {MovieBox} from '../../MovieBox/MovieBox';
import {TMovie} from '../../../common/types';
import {Container} from '../../../common/common.styles';
import {MoviesWrapper, StyledMovies} from '../Movies.styles';
import {ResultTitle} from './MoviesSearcher.styles';

export function MoviesSearcher(): JSX.Element {
  const movies = useSelector(
    (state: RootState) => state.searchReducer.searchedMovies
  );

  const query = useSelector((state: RootState) => state.searchReducer.query);

  if (movies.length === 0) {
    return (
      <StyledMovies>
        <h1
          style={{
            fontFamily: 'Roboto, sans-serif',
            textAlign: 'center',
            margin: '0',
            padding: '2rem'
          }}
        >
          Movie not found
        </h1>
      </StyledMovies>
    );
  }
  const movieBoxes = movies.map((item: TMovie) => (
    <MovieBox key={item.id} movie={item} />
  ));

  return (
    <StyledMovies>
      <ResultTitle>
        Results for:
        {query}
      </ResultTitle>
      <Container>
        <MoviesWrapper>{movieBoxes}</MoviesWrapper>
      </Container>
    </StyledMovies>
  );
}
