import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {MovieBox} from '../MovieBox/MovieBox';
import {IMovie} from '../../common/types';
import styles from './movies.module.sass';

export function SearchMovies(): JSX.Element {
  const movies = useSelector(
    (state: RootState) => state.searchReducer.searchedMovies
  );

  if (movies.length === 0) {
    return (
      <div className={styles.movies}>
        <h1
          style={{
            fontFamily: 'Roboto, sans-serif',
            textAlign: 'center',
            margin: '0',
            padding: '2rem'
          }}
        >
          Movie not found. Please enter other
        </h1>
      </div>
    );
  }
  const movieBoxes = movies.map((item: IMovie) => (
    <MovieBox key={item.id} movie={item} />
  ));

  return (
    <div className={styles.movies}>
      <div className="container">
        <div className={styles.movies_wrapper}>{movieBoxes}</div>
      </div>
    </div>
  );
}
