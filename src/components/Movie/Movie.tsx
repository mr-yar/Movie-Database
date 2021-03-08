import React from 'react';
import {useSelector} from 'react-redux';
import ProgressBar from 'react-customizable-progressbar';
import ISO6391 from 'iso-639-1';
import {RootState} from '../../redux/store';
import {infoElem} from './infoGrid';
import {Loader} from '../Loader/Loader';
import {IMovieProps} from '../../common/types';
import styles from './movie.module.sass';

export function Movie({movie}: IMovieProps): JSX.Element {
  const isFetchingSelectedMovie = useSelector(
    (state: RootState) => state.selectedMovieReducer.loading
  );

  if (isFetchingSelectedMovie) {
    return (
      <div>
        <Loader />
      </div>
    );
  }

  const releaseYear = movie.release_date.match(/\b(18|19|20)\d{2}\b/)[0];
  const {certification} = movie.release_dates.results[0].release_dates[0];
  const date = movie.release_date.split('-');

  function timeConvert(n: number) {
    const hours = n / 60;
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    return `${rhours}h ${rminutes}m`;
  }

  function setCrew(job: string) {
    const crew: string[] = [];
    movie.credits.crew.forEach((item: {job: string; name: string}) => {
      if (item.job === job) {
        crew.push(item.name, item.job);
      }
    });
    if (crew.length === 0) {
      return ['Unknown', job];
    }
    return crew;
  }
  function setGenre(n: number) {
    const genres: string[] = [];
    for (let i = 0; i < n; i += 1) {
      if (!movie.genres[i]) break;
      genres.push(movie.genres[i].name);
    }
    return genres.join(', ');
  }

  function setCurrency(value: number) {
    if (value === 0) return 'Unknown';
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
  }

  function setCast(n: number) {
    const cast: any = [];
    for (let i = 0; i < n; i += 1) {
      if (!movie.credits.cast[i]) break;
      cast.push({
        id: i,
        name: movie.credits.cast[i].name,
        role: movie.credits.cast[i].character
      });
    }

    return (
      <>
        <div className={styles.cast_title}>CAST:</div>
        {cast.map((elem: {id: number; name: string; role: string}) => (
          <div className={styles.cast_elem} key={elem.id}>
            {cast[elem.id].name}
            {' '}
            <span>{cast[elem.id].role}</span>
          </div>
        ))}
      </>
    );
  }

  let strokeColor;
  if (movie.vote_average > 0) {
    strokeColor = '#ed001b';
    if (movie.vote_average >= 3) {
      strokeColor = '#eddf00';
      if (movie.vote_average >= 7) {
        strokeColor = '#21d07a';
      }
    }
  }

  const bg = {
    backgroundImage: `linear-gradient(black, black),
url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`
  };

  return (
    <div className={styles.movie} style={bg}>
      <div className="container">
        <div className={styles.movie_wrapper}>
          <div className={styles.posterAndCast}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt=""
            />
            {setCast(5)}
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>
              {movie.title}
              {' '}
              <span>
                (
                {releaseYear}
                )
              </span>
            </h1>
            <div className={styles.subtitle}>
              <span className={styles.second}>{certification}</span>
              <span className={styles.dots}>·</span>
              <span>
                {date[2]}
                /
                {date[1]}
                /
                {date[0]}
              </span>
              <span className={styles.dots}>·</span>
              <span>{setGenre(2)}</span>
              <span className={styles.dots}>·</span>
              <span>{timeConvert(movie.runtime)}</span>
            </div>
            <div className={styles.userScore}>
              <ProgressBar
                radius={40}
                progress={movie.vote_average * 10}
                strokeWidth={6}
                trackStrokeWidth={6}
                strokeColor={strokeColor}
                trackStrokeColor="#204529"
                initialAnimation
                initialAnimationDelay={150}
              >
                <div className={styles.indicator}>
                  <div>
                    {movie.vote_average * 10}
                    %
                  </div>
                </div>
              </ProgressBar>
              <div className={styles.userScore_text}>User Score</div>
            </div>
            <div className={styles.overview}>
              <div className={styles.overview_title}>Overview</div>
              <div className={styles.overview_text}>{movie.overview}</div>
            </div>
            <div className={styles.infoGrid}>
              {infoElem(setCrew('Director'))}
              {infoElem(setCrew('Director of Photography'))}
              {infoElem(setCrew('Original Music Composer'))}
              {infoElem(setCurrency(movie.budget), 'Budget')}
              {infoElem(setCurrency(movie.revenue), 'Revenue ')}
              {infoElem(
                ISO6391.getName(movie.original_language),
                'Original Language'
              )}
            </div>
            <div className={styles.btn}>
              <a
                href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}
              >
                Play Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
