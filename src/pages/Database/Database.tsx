import React from 'react';
import {Nav} from '../../components/Nav/Nav';
import {Header} from '../../components/Header/Header';
import {Searcher} from '../../components/Searcher/Searcher';
import {Movies} from '../../components/Movies/Movies';
import {TMovieProps} from '../../common/types';

export const Database = ({movie}: TMovieProps): JSX.Element => (
  <>
    <Nav />
    <Header movie={movie} />
    <Searcher />
    <Movies />
  </>
);
