import React from 'react';

import styles from './movies.module.sass';
import {MovieBox} from '../MovieBox/MovieBox';

export function Movies(): JSX.Element {
  return (
    <div className={styles.movies}>
      <div className="container">
        <div className={styles.movies_wrapper}>
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
          <MovieBox />
        </div>
      </div>
    </div>
  );
}
