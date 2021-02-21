import React from 'react';

import {useDispatch} from 'react-redux';
import {loadSelectedMovieAction} from '../../../redux/actions';

import likeIcon from './icons/like.svg';
import downloadIcon from './icons/downloads.svg';
import commentsIcon from './icons/comments.svg';

import styles from './movieBox.module.sass';
import {IMovie} from '../../../common/Interfaces/IMovie';

export function MovieBox({movie}: {movie: IMovie}): JSX.Element {
  const dispatch = useDispatch();

  function movieBoxHandler() {
    dispatch(loadSelectedMovieAction(movie.id));
  }

  return (
    <div className={styles.movieBox} role="button" tabIndex={0} onClick={movieBoxHandler}>
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <div className={styles.info}>
        <div className={styles.like}>
          <img src={likeIcon} alt="" />
          1,218
        </div>
        <div className={styles.downloads}>
          <img src={downloadIcon} alt="" />
          731
        </div>
        <div className={styles.comments}>
          <img src={commentsIcon} alt="" />
          58
        </div>

        <div className={styles.releaseDate}>
          Release Date:
          {' '}
          <span>{movie.release_date}</span>
        </div>
        <div className={styles.originalName}>
          Original name:
          {movie.original_title}
        </div>
      </div>
      <div className={styles.name}>{movie.title}</div>
    </div>
  );
}
