import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {IMovieProps} from '../../../common/types';
import styles from './header.module.sass';

export function Header({movie}: IMovieProps): JSX.Element {
  const isFetchingSelectedMovie = useSelector(
    (state: RootState) => state.selectedMovieReducer.loading
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
  movie.credits.crew.forEach((item: {job: string; name: string}) => {
    if (item.job === 'Director') {
      creditsDirector.push(item.name);
    }
  });

  const creditsGenre: string[] = [];
  movie.genres.forEach((item: {name: string}) => {
    creditsGenre.push(item.name);
  });

  const bg = {backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`};

  return (
    <header className={styles.header} style={bg}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.info}>
            <div className={styles.descr_point}>
              Name:
              {' '}
              <span>{movie.title}</span>
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
              <span>{movie.release_date.match(/\b(18|19|20)\d{2}\b/)[0]}</span>
            </div>
            <div className={`${styles.descr_point} ${styles.tagline}`}>
              {movie.tagline}
            </div>
          </div>

          <button type="button" className={styles.btn}>
            <Link to="/movie">More</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
