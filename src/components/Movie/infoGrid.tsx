import React from 'react';
import styles from './movie.module.sass';

export function infoElem(
  value: string,
  category: string
): JSX.Element {
  return (
    <div className={styles.gridElem}>
      <div className={styles.gridElem_value}>{value}</div>
      <div className={styles.gridElem_category}>{category}</div>
    </div>
  );
}
