import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import {useDispatch, useSelector} from 'react-redux';
import {MovieBox} from '../MovieBox/MovieBox';
import {RootState} from '../../store';
import {TMovie} from '../../common/types';
import {Container} from '../../common/common.styles';
import {MoviesWrapper, StyledMovies} from './Movies.styles';
import {loadNewLastMoviesAction} from '../../store/modules/movies/actions';

export function Movies(): JSX.Element {
  const dispatch = useDispatch();

  const movies = useSelector((state: RootState) => state.moviesReducer.movies);

  const currentPage = useSelector(
    (state: RootState) => state.moviesReducer.currentPage
  );

  const movieBoxes = movies.map((item: TMovie) => (
    <MovieBox key={item.id} movie={item} />
  ));

  function fetchData() {
    dispatch(loadNewLastMoviesAction(currentPage + 1));
  }

  // return (
  //   <InfiniteLoader
  //     loadMoreItems={fetchData}
  //     itemCount={10}
  //     isItemLoaded={false}
  //   >
  //     <MoviesWrapper>{movieBoxes}</MoviesWrapper>
  //   </InfiniteLoader>
  // );

  return (
    <StyledMovies>
      <Container>
        <InfiniteScroll
          dataLength={movies.length}
          hasMore
          loader={<h3>Loading...</h3>}
          next={fetchData}
          style={{overflow: 'hidden'}}
        >
          <MoviesWrapper>{movieBoxes}</MoviesWrapper>
        </InfiniteScroll>
      </Container>
    </StyledMovies>
  );
}
