import React from 'react';
import styles from './movieBox.module.sass';
import poster from './img/movie.png';
import likeIcon from './img/like.svg';
import downloadIcon from './img/downloads.svg';
import commentsIcon from './img/comments.svg';

export function MovieBox(): JSX.Element {
  return (
    <div className={styles.movieBox}>
      <img src={poster} alt="" />
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
          <span>May 03, 2013</span>
        </div>
      </div>
      <div className={styles.name}>John Wick</div>
    </div>
  );
}
