import React, {useContext} from 'react';
import {IconProps} from '../types';
import {MainThemeContext} from '../../styles/theme';

export const Likes = ({size}: IconProps): JSX.Element => {
  const color = useContext(MainThemeContext).color.accent;

  return (
    <div style={{width: size, height: size}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 488.85 488.85"
        version="1.1"
        viewBox="0 0 488.85 488.85"
        xmlSpace="preserve"
        style={{width: '100%', height: '100%'}}
        fill={color}
      >
        <path d="M53.333 224C23.936 224 0 247.936 0 277.333V448c0 29.397 23.936 53.333 53.333 53.333h64c12.011 0 23.061-4.053 32-10.795V224h-96zM512 304c0-12.821-5.077-24.768-13.888-33.579 9.963-10.901 15.04-25.515 13.653-40.725-2.496-27.115-26.923-48.363-55.637-48.363H324.352c6.528-19.819 16.981-56.149 16.981-85.333 0-46.272-39.317-85.333-64-85.333-22.165 0-37.995 12.48-38.677 12.992A10.72 10.72 0 00234.667 32v72.341l-61.44 133.099-2.56 1.301v228.651C188.032 475.584 210.005 480 224 480h195.819c23.232 0 43.563-15.659 48.341-37.269 2.453-11.115 1.024-22.315-3.861-32.043 15.765-7.936 26.368-24.171 26.368-42.688 0-7.552-1.728-14.784-5.013-21.333C501.419 338.731 512 322.496 512 304z" />
      </svg>
    </div>
  );
};
