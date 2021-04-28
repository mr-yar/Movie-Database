import React from 'react';
import {Nav} from '../../components/Nav/Nav';
import {Header} from '../../components/Header/Header';
import {Searcher} from '../../components/Searcher/Searcher';
import {SearchMovies} from '../../components/Movies/SearchMovies';
import {IMovieProps} from '../../common/types';

export const SelectedMovie = ({movie}: IMovieProps): JSX.Element => (
  <>
    <Nav />
    <Header movie={movie} />
    <Searcher />
    <SearchMovies />
  </>
);
