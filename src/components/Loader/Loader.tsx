import React from 'react';
import LoaderSvg from './LoaderSvg';

export function Loader(): JSX.Element {
  const styles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  };
  return (
    <div>
      <div style={styles}>
        <LoaderSvg />
      </div>
    </div>
  );
}
