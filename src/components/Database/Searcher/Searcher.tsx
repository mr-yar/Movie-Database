import React from 'react';

import styles from './searcher.module.sass';
import loupe from './icons/loupe.svg';

export function Searcher(): JSX.Element {
  return (
    <div className={styles.searcher}>


      <div className="container">
        <div className={styles.searcher_wrapper}>
          <h1 className={styles.title}>Featured movies</h1>
          <div className={styles.menu}>
            <span className={`${styles.section} ${styles.active}`}>
              New Realised
            </span>
            <span className={styles.section}>/</span>
            <span className={styles.section}>Trailers & Clips</span>
          </div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className={styles.searcher_box}>
            <input
              type="text"
              name="input"
              className={styles.input}
              placeholder="Search..."
            />
            <img src={loupe} alt="" className={styles.searcher_img} />
          </div>
        </div>
      </div>
    </div>
  );
}
