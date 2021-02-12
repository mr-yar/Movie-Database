import React from 'react';
import ProgressBar from 'react-customizable-progressbar';

import styles from './movie.module.sass';
import poster from './img/poster.jpg';
import {infoElem} from './infoGrid';
import {castElem} from './castElem';

export function Movie(): JSX.Element {
  return (
    <div className={styles.movie}>
      <div className="container">
        <div className={styles.movie_wrapper}>
          <div className={styles.posterAndCast}>
            <img src={poster} alt="" />
            <div className={styles.cast_title}>CAST:</div>
            {castElem('Ryan Gosling', 'K')}
            {castElem('Ane de Armas', 'Joi')}
            {castElem('Sylvia Hoeks', 'Luv')}
            {castElem('Mackenzie Davis', 'Marrette')}
            {castElem('Harrisson Ford ', 'Rick Deckard')}
          </div>
          <div className={styles.info}>
            <h1 className={styles.title}>
              Blade Runner 2049
              {' '}
              <span>(2017)</span>
            </h1>
            <div className={styles.subtitle}>
              <span className={styles.second}>R</span>
              {' '}
              <span>10/06/2017 (US)</span>
              <span className={styles.dots}>·</span>
              <span>Science Fiction, Drama</span>
              <span className={styles.dots}>·</span>
              <span>2h 44m</span>
            </div>
            <div className={styles.userScore}>
              <ProgressBar
                radius={40}
                progress={75}
                strokeWidth={6}
                trackStrokeWidth={6}
                strokeColor="#21d07a"
                trackStrokeColor="#204529"
                initialAnimation
                initialAnimationDelay={150}
              >
                <div className={styles.indicator}>
                  <div>75%</div>
                </div>
              </ProgressBar>
              <div className={styles.userScore_text}>User Score</div>
            </div>
            <div className={styles.overview}>
              <div className={styles.overview_title}>Overview</div>
              <div className={styles.overview_text}>
                Thirty years after the events of the first film, a new
                blade runner, LAPD Officer K, unearths a long-buried
                secret that has the potential to plunge what&apos;s
                left of society into chaos. K&apos;s discovery leads
                him on a quest to find Rick Deckard, a former LAPD
                blade runner who has been missing for 30 years.
              </div>
            </div>
            <div className={styles.infoGrid}>
              {infoElem('Hampton Fancher', 'Screenplay, Story')}
              {infoElem('Philip K. Dick', 'Characters')}
              {infoElem('Denis Villeneuve', 'Director')}
              {infoElem('$150,000,000.00', 'Budget')}
              {infoElem('$259,239,658.00', 'Revenue ')}
              {infoElem('English', 'Original Language')}
            </div>
            <div className={styles.btn}>
              <a href="/">Play Trailer</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
