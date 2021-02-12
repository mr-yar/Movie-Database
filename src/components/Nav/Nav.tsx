import React from 'react';
import {Link} from 'react-router-dom';

import styles from './nav.module.sass';

import logoDatabase from './img/database-storage.svg';
import logoMovie from './img/clapperboard.svg';

export function Nav(): JSX.Element {
  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_wrapper}>
          <div className={styles.logo}>
            <Link to="/">Movie Database</Link>
          </div>
          <div className="menu">
            <Link to="/database">
              <img
                src={logoDatabase}
                alt=""
                className={styles.pages}
              />
            </Link>
            <Link to="/movie">
              <img src={logoMovie} alt="" className={styles.pages} />
            </Link>
          </div>
          <div className={styles.avatar}>John Doe</div>
        </div>
      </div>
    </nav>
  );
}
