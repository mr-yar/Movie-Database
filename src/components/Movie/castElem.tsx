import React from 'react';
import styles from './movie.module.sass';

export function castElem(actor: string, character: string): JSX.Element {
  return (
    <div className={styles.cast_elem}>
      {actor}
      {' '}
      <span>{character}</span>
    </div>
  );
}
