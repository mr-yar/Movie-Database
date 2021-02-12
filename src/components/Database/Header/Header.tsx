import React from 'react';
import {Link} from 'react-router-dom';
import styles from './header.module.sass';

export function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header_wrapper}>
          <div className={styles.info}>
            <div className={styles.descr_point}>
              Name:
              {' '}
              <span>Blade Runner 2049</span>
            </div>
            <div className={styles.descr_point}>
              Director:
              {' '}
              <span>Denis Villeneuve</span>
            </div>
            <div className={styles.descr_point}>
              Genre:
              {' '}
              <span>Science Fiction, Drama</span>
            </div>
            <div className={styles.descr_point}>
              Year:
              {' '}
              <span>2017</span>
            </div>
            <div
              className={`${styles.descr_point} ${styles.tagline}`}
            >
              The key to the future is finally unearthed
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
