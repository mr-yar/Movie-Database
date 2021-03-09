import React, {KeyboardEvent, useState} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchMovieAction} from '../../../redux/reducers/searchReducer';
import styles from './searcher.module.sass';

export function Searcher(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

  const [inputState, setInputState] = useState('');
  const [activeSection, setActiveSection] = useState(1);
  const isInputEmpty = inputState.trim() === '';

  const handleEnterDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && !isInputEmpty) {
      dispatch(searchMovieAction(inputState));
      setActiveSection(2);
      history.push('/database/selectedmovie');
    }
  };

  return (
    <div className={styles.searcher}>
      <div className="container">
        <div className={styles.searcher_wrapper}>
          <h1 className={styles.title}>Featured movies</h1>
          <div className={styles.menu}>
            <Link to="/database/" onClick={() => setActiveSection(1)}>
              <span
                className={
                  activeSection === 1
                    ? `${styles.section} ${styles.active}`
                    : styles.section
                }
              >
                New Realised
              </span>
            </Link>
            <span className={styles.section}>/</span>
            {' '}
            <Link to="/database/selectedmovie" onClick={() => setActiveSection(2)}>
              <span
                className={
                  activeSection === 2
                    ? `${styles.section} ${styles.active}`
                    : styles.section
                }
              >
                Search movies
              </span>
            </Link>
          </div>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <div className={styles.searcher_box}>
            <input
              type="text"
              name="input"
              className={styles.input}
              placeholder="Search..."
              autoComplete="off"
              onChange={(event) => setInputState(event.target.value)}
              onKeyPress={(event) => handleEnterDown(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
