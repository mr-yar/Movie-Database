import React from 'react';
import {useSelector} from 'react-redux';
import ProgressBar from 'react-customizable-progressbar';
import {setCurrency, timeConvert} from '../../services/utils';
import {RootState} from '../../store';
import {GridElem} from '../GridElem/GridElem';
import {Loader} from '../Loader/Loader';
import {TMovieProps} from '../../common/types';
import {TFetchedCast} from '../../store/modules/selectedMovie/types';
import {Container} from '../../common/common.styles';
import {
  CastTitle,
  Dot,
  Indicator,
  InfoGrid,
  MovieInfo,
  MovieSubtitle,
  MovieTitle,
  MovieWrapper,
  Overview,
  OverviewText,
  OverviewTitle,
  Person,
  PosterAndCast,
  SecondaryText,
  StyledMovie,
  TrailerLink,
  UserScore,
  UserScoreSubtitle
} from './Movie.styles';

export function Movie({movie}: TMovieProps): JSX.Element {
  const isFetching = useSelector(
    (state: RootState) => state.selectedMovieReducer.loading
  );

  if (isFetching) {
    return (
      <div>
        <Loader />
      </div>
    );
  }
  const {
    backdropPath,
    budget,
    cast,
    certification,
    crew,
    genres,
    originalLanguage,
    overview,
    posterPath,
    releaseDate,
    revenue,
    title,
    video,
    voteAverage
  } = movie;

  const [year, month, day] = releaseDate.split('-');

  let strokeColor;
  if (voteAverage > 0) {
    strokeColor = '#ed001b';
    if (voteAverage >= 3) {
      strokeColor = '#eddf00';
      if (voteAverage >= 7) {
        strokeColor = '#21d07a';
      }
    }
  }

  return (
    <StyledMovie bg={backdropPath}>
      <Container>
        <MovieWrapper>
          <PosterAndCast>
            <img src={`https://image.tmdb.org/t/p/w500${posterPath}`} alt="" />

            <CastTitle>CAST:</CastTitle>
            {cast.map((item: TFetchedCast) => (
              <Person key={item.id}>
                {cast[item.id].name}
                {' '}
                <span>{cast[item.id].character}</span>
              </Person>
            ))}
          </PosterAndCast>
          <MovieInfo>
            <MovieTitle>
              {title}
              {' '}
              <span>
                (
                {year}
                )
              </span>
            </MovieTitle>

            <MovieSubtitle>
              <SecondaryText>{certification}</SecondaryText>
              <Dot />
              <span>
                {day}
                /
                {month}
                /
                {year}
              </span>
              <Dot />
              <span>{genres}</span>
              <Dot />
              <span>{timeConvert(movie.runtime)}</span>
            </MovieSubtitle>

            <UserScore>
              <ProgressBar
                radius={40}
                progress={voteAverage * 10}
                strokeWidth={6}
                trackStrokeWidth={6}
                strokeColor={strokeColor}
                trackStrokeColor="#204529"
                initialAnimation
                initialAnimationDelay={150}
              >
                <Indicator>
                  <div>
                    {voteAverage * 10}
                    %
                  </div>
                </Indicator>
              </ProgressBar>
              <UserScoreSubtitle>User Score</UserScoreSubtitle>
            </UserScore>

            <Overview>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewText>{overview}</OverviewText>
            </Overview>

            <InfoGrid>
              <GridElem value={crew.director} category="Director" />
              <GridElem
                value={crew.directorOfPhotography}
                category="Director of Photography"
              />
              <GridElem value={crew.composer} category="Original Music Composer" />
              <GridElem value={setCurrency(budget)} category="Budget" />
              <GridElem value={setCurrency(revenue)} category="Revenue" />
              <GridElem value={originalLanguage} category="Original Language" />
            </InfoGrid>

            <TrailerLink>
              <a href={video}>Play Trailer</a>
            </TrailerLink>
          </MovieInfo>
        </MovieWrapper>
      </Container>
    </StyledMovie>
  );
}
