import React from 'react';
import {useSelector} from 'react-redux';
import ISO6391 from 'iso-639-1';
import ProgressBar from 'react-customizable-progressbar';
import {RootState} from '../../redux/reducers/rootReducer';
import styles from './movie.module.sass';
import {infoElem} from './infoGrid';
import {castElem} from './castElem';

export function Movie(): JSX.Element {
  const movie = useSelector(
    (state: RootState) => state.selectedMovieBoxReducer.selectedMovie
  );

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

  function setCrew(job: any) {
    const crew: any = [];
    movie.credits.crew.forEach((item: {job: string; name: string}) => {
      if (item.job === job) {
        crew.push(item.name, item.job);
      }
    });
    return crew;
  }
  function setCurrency(value: number) {
    if (value === 0) return 'Unknown';
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0
    });
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
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
            <div className={styles.cast_title}>CAST:</div>
            {castElem(movie.credits.cast[0].name, movie.credits.cast[0].character)}
            {castElem(movie.credits.cast[1].name, movie.credits.cast[1].character)}
            {castElem(movie.credits.cast[2].name, movie.credits.cast[2].character)}
            {castElem(movie.credits.cast[3].name, movie.credits.cast[3].character)}
            {castElem(movie.credits.cast[4].name, movie.credits.cast[4].character)}
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
              <span>
                {movie.genres[0].name}
                {', '}
                {movie.genres[1].name}
              </span>
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
              {infoElem(ISO6391.getName(movie.original_language), 'Original Language')}
            </div>
            <div className={styles.btn}>
              <a href={`https://www.youtube.com/watch?v=${movie.videos.results[0].key}`}>
                Play Trailer
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
