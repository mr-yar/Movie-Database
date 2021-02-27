import React, {KeyboardEvent, useState} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import loupe from './icons/loupe.svg';
import {searchMovieAction} from '../../../redux/reducers/searchReducer';

import styles from './searcher.module.sass';

export function Searcher(): JSX.Element {
  const dispatch = useDispatch();

  const [inputState, setInputState] = useState('');
  const isInputEmpty = inputState.trim() === '';

  const handleEnterDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !isInputEmpty) {
      dispatch(searchMovieAction(inputState));
    }
  };

  return (
    <div className={styles.searcher}>
      <div className="container">
        <div className={styles.searcher_wrapper}>
          <h1 className={styles.title}>Featured movies</h1>
          <div className={styles.menu}>
            <Link to="/database/">
              <span className={`${styles.section} ${styles.active}`}>
                New Realised
              </span>
            </Link>
            <span className={styles.section}>/</span>
            {' '}
            <Link to="/database/selectedmovie">
              <span className={styles.section}>Trailers & Clips</span>
            </Link>
          </div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className={styles.searcher_box}>
            <input
              type="text"
              name="input"
              className={styles.input}
              placeholder="Search..."
              onChange={(event) => setInputState(event.target.value)}
              onKeyPress={(event) => handleEnterDown(event)}
            />
            <img src={loupe} alt="" className={styles.searcher_img} />
          </div>
        </div>
      </div>
    </div>
  );
}
