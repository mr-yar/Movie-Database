import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {loadSelectedMovieAction} from '../../../redux/actions';
import {RootState} from '../../../redux/reducers/rootReducer';

import styles from './header.module.sass';

export function Header(): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  const selectedMovie = useSelector(
    (state: RootState) => state.selectedMovieBoxReducer.selectedMovie
  );

  if (Object.keys(selectedMovie).length === 0) {
    dispatch(loadSelectedMovieAction(movies[0].id));
  }

  const isFetchingSelectedMovie = useSelector(
    (state: RootState) => state.selectedMovieBoxReducer.loading
  );

  if (isFetchingSelectedMovie) {
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles.header_wrapper}>
            <div className={styles.info}>
              <div className={styles.descr_point}>Name:</div>
              <div className={styles.descr_point}>Director(&apos;s):</div>
              <div className={styles.descr_point}>Genre:</div>
              <div className={styles.descr_point}>Year:</div>
              <div className={`${styles.descr_point} ${styles.tagline}`} />
            </div>
          </div>
        </div>
      </header>
    );
  }

  const creditsDirector: string[] = [];
  selectedMovie.credits.crew.forEach((item: {job: string; name: string}) => {
    if (item.job === 'Director') {
      creditsDirector.push(item.name);
    }
  });

  const creditsGenre: string[] = [];
  selectedMovie.genres.forEach((item: {name: string}) => {
    creditsGenre.push(item.name);
  });

  const bg = {backgroundImage: `url(https://image.tmdb.org/t/p/original/${selectedMovie.backdrop_path})`};

  return (
    <header className={styles.header} style={bg}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.info}>
            <div className={styles.descr_point}>
              Name:
              {' '}
              <span>{selectedMovie.title}</span>
            </div>
            <div className={styles.descr_point}>
              Director(&apos;s):
              {' '}
              <span>{creditsDirector.join(', ')}</span>
            </div>
            <div className={styles.descr_point}>
              Genre:
              {' '}
              <span>{creditsGenre.join(', ')}</span>
            </div>
            <div className={styles.descr_point}>
              Year:
              {' '}
              <span>{selectedMovie.release_date.match(/\b(18|19|20)\d{2}\b/)[0]}</span>
            </div>
            <div className={`${styles.descr_point} ${styles.tagline}`}>
              {selectedMovie.tagline}
            </div>
          </div>
          <Link to="/movie">
            <button type="button" className={styles.btn}>
              More
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
