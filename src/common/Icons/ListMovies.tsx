import React, {useContext} from 'react';
import {IconProps} from '../types';
import {MainThemeContext} from '../../styles/theme';

export const ListMovies = ({size, isActive}: IconProps): JSX.Element => {
  const color = useContext(MainThemeContext).color.accent;

  return (
    <div style={{width: size, height: size}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill={isActive ? color : ''}
      >
        <path d="M5 0H1a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1V1a1 1 0 00-1-1zM23 0H9a1 1 0 00-1 1v4a1 1 0 001 1h14a1 1 0 001-1V1a1 1 0 00-1-1zM5 9H1a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM23 9H9a1 1 0 00-1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 00-1-1zM5 18H1a1 1 0 00-1 1v4a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 00-1-1zM23 18H9a1 1 0 00-1 1v4a1 1 0 001 1h14a1 1 0 001-1v-4a1 1 0 00-1-1z" />
      </svg>
    </div>
  );
};
