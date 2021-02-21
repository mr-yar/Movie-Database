import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/reducers/rootReducer';

import {MovieBox} from '../MovieBox/MovieBox';

import {IMovie} from '../../../common/Interfaces/IMovie';
import styles from './movies.module.sass';

export function Movies(): JSX.Element {
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

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
