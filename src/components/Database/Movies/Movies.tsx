import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store';
import {loadNewLastMoviesAction} from '../../../redux/reducers/moviesReducer';
import {MovieBox} from '../MovieBox/MovieBox';
import {IMovie} from '../../../common/types';
import styles from './movies.module.sass';

export function Movies(): JSX.Element {
  const dispatch = useDispatch();
  const movies = useSelector((state: RootState) => state.moviesReducer.movies);
  const currentPage = useSelector(
    (state: RootState) => state.moviesReducer.currentPage
  );

  const movieBoxes = movies.map((item: IMovie) => (
    <MovieBox key={item.id} movie={item} />
  ));

  function fetchData() {
    dispatch(loadNewLastMoviesAction(currentPage + 1));
  }

  return (
    <div className={styles.movies}>
      <div className="container">
        <InfiniteScroll
          dataLength={movies.length}
          hasMore
          loader={<h3>Loading...</h3>}
          next={fetchData}
          style={{overflow: 'hidden'}}
        >
          <div className={styles.movies_wrapper}>{movieBoxes}</div>
        </InfiniteScroll>
      </div>
    </div>
  );
}
