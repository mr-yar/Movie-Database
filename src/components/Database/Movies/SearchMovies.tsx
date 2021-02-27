import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {IMovie} from '../../../common/Interfaces/IMovie';
import {MovieBox} from '../MovieBox/MovieBox';
import styles from './movies.module.sass';

export function SearchMovies(): JSX.Element {
  const movies = useSelector(
    (state: RootState) => state.searchReducer.searchedMovies
  );
  if (movies.length === 0) {
    return (
      <div>
        <h1>Enter title...</h1>
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
