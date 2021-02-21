import React from 'react';
import styles from './movie.module.sass';

export function infoElem(value: string, category?: string): JSX.Element {
  if (!category) {
    return (
      <div className={styles.gridElem}>
        <div className={styles.gridElem_value}>{value[0]}</div>
        <div className={styles.gridElem_category}>{value[1]}</div>
      </div>
    );
  }
  return (
    <div className={styles.gridElem}>
      <div className={styles.gridElem_value}>{value}</div>
      <div className={styles.gridElem_category}>{category}</div>
    </div>
  );
}
