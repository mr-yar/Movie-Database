import React from 'react';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {loadSelectedMovieAction} from '../../store/modules/selectedMovie/actions';
import {Views} from '../../common/Icons/Views';
import {Rating} from '../../common/Icons/Rating';
import {Likes} from '../../common/Icons/Likes';
import {TMovie} from '../../common/types';
import {Button} from '../../common/common.styles';
import {
  Info,
  InfoIcon,
  MovieBoxName,
  OriginalTitle,
  ReleaseDate,
  StyledMovieBox
} from './MovieBox.styles';
import noImg from '../../common/Icons/svg/no-camera.svg';

export function MovieBox({movie}: {movie: TMovie}): JSX.Element {
  const dispatch = useDispatch();

  const {
    popularity,
    title,
    originalTitle,
    posterPath,
    voteCount,
    voteAverage,
    releaseDate
  } = movie;

  function movieBoxHandler() {
    dispatch(loadSelectedMovieAction(movie.id));
  }

  return (
    <StyledMovieBox role="button" tabIndex={0} onClick={movieBoxHandler}>
      <img
        src={posterPath === null ? noImg : `https://image.tmdb.org/t/p/w500${posterPath}`}
        alt=""
      />

      <Info>
        <InfoIcon>
          <Views />
          {popularity}
        </InfoIcon>
        <InfoIcon>
          <Rating />
          {voteAverage}
        </InfoIcon>
        <InfoIcon style={{marginBottom: '2rem'}}>
          <Likes />
          {voteCount}
        </InfoIcon>

        <ReleaseDate>
          Release Date:
          {' '}
          <span>{releaseDate}</span>
        </ReleaseDate>
        <OriginalTitle>
          Original title:
          {' '}
          <span>{originalTitle}</span>
        </OriginalTitle>

        <Button style={{margin: '50% auto auto'}}>
          <Link to="/movie">More</Link>
        </Button>
      </Info>

      <MovieBoxName>{title}</MovieBoxName>
    </StyledMovieBox>
  );
}
