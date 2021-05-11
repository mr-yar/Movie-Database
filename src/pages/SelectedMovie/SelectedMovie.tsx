import React from 'react';
import {Nav} from '../../components/Nav/Nav';
import {Movie} from '../../components/Movie/Movie';
import {TMovieProps} from '../../common/types';

export const SelectedMovie = ({movie}: TMovieProps): JSX.Element => (
  <>
    <Nav />
    <Movie movie={movie} />
  </>
);
