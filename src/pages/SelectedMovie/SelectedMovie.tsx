import React from 'react';
import {Nav} from '../../components/Nav/Nav';
import {IMovieProps} from '../../common/types';
import {Movie} from '../../components/Movie/Movie';

export const SelectedMovie = ({movie}: IMovieProps): JSX.Element => (
  <>
    <Nav />
    <Movie movie={movie} />
  </>
);
