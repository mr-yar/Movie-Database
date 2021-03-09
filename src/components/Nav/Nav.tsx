import React from 'react';
import {Link} from 'react-router-dom';
import logoDatabase from './icons/database-storage.svg';
import logoMovie from './icons/clapperboard.svg';
import styles from './nav.module.sass';

export function Nav(): JSX.Element {
  // const dispatch = useDispatch();

  // const themeMode = useSelector(
  //   (state: RootState) => state.themeModeReducer.isDarkModeOn
  // );
  // function themeHandler() {
  //   dispatch(modeChangeAction());
  // }

  return (
    <nav className={styles.nav}>
      <div className="container">
        <div className={styles.nav_wrapper}>
          <div className={styles.logo}>
            <Link to="/">
              Movie
              {' '}
              <span>Database</span>
            </Link>
          </div>
          <div className={styles.menu}>
            <Link to="/database">
              <img src={logoDatabase} alt="" className={styles.pages} />
            </Link>
            <Link to="/movie">
              <img src={logoMovie} alt="" className={styles.pages} />
            </Link>
          </div>
          {/* <Switch */}
          {/*  checked={themeMode} */}
          {/*  onChange={themeHandler} */}
          {/*  offColor="#00cbbb" */}
          {/*  onColor="#2b4c99" */}
          {/*  uncheckedIcon={<Sun />} */}
          {/*  checkedIcon={<Moon />} */}
          {/*  width={70} */}
          {/*  height={35} */}
          {/* /> */}
          <div className={styles.avatar}>John Doe</div>
        </div>
      </div>
    </nav>
  );
}
