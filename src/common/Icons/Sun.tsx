import React from 'react';

export default function Sun(): JSX.Element {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
      }}
    >
      <svg
        style={{height: '80%'}}
        xmlns="http://www.w3.org/2000/svg"
        width="512"
        height="512"
        viewBox="0 0 512 512"
      >
        <circle cx="256" cy="256" r="149.125" fill="#fed943" />
        <path fill="#fcbe2c" d="M241 0h30v80.378h-30z" />
        <path
          fill="#fcbe2c"
          d="M54.102 107.905h30v80.378h-30z"
          transform="rotate(-60 69.101 148.099)"
        />
        <path
          fill="#fcbe2c"
          d="M28.913 348.906h80.378v30H28.913z"
          transform="rotate(-30 69.085 363.907)"
        />
        <path fill="#fcbe2c" d="M241 431.622h30V512h-30z" />
        <path
          fill="#fcbe2c"
          d="M427.898 323.717h30v80.378h-30z"
          transform="rotate(-60 442.904 363.919)"
        />
        <path
          fill="#fcbe2c"
          d="M402.709 133.095h80.378v30h-80.378z"
          transform="rotate(-30 442.89 148.114)"
        />
        <path
          fill="#fcbe2c"
          d="M128.161 34.866h30v51.38h-30z"
          transform="rotate(-30 143.155 60.562)"
        />
        <path fill="#fcbe2c" d="M4.631 241h51.38v30H4.631z" />
        <path
          fill="#fcbe2c"
          d="M117.471 436.444h51.38v30h-51.38z"
          transform="rotate(-60 143.156 451.454)"
        />
        <path
          fill="#fcbe2c"
          d="M353.84 425.754h30v51.38h-30z"
          transform="rotate(-30 368.81 451.453)"
        />
        <path fill="#fcbe2c" d="M455.989 241h51.38v30h-51.38z" />
        <path
          fill="#fcbe2c"
          d="M343.15 45.556h51.38v30h-51.38z"
          transform="rotate(-60 368.845 60.563)"
        />
        <path
          fill="#f7aa00"
          d="M427.898 323.717h30v80.378h-30z"
          transform="rotate(-60 442.904 363.919)"
        />
        <path
          fill="#f7aa00"
          d="M402.709 133.095h80.378v30h-80.378z"
          transform="rotate(-30 442.89 148.114)"
        />
        <path
          fill="#f7aa00"
          d="M353.84 425.754h30v51.38h-30z"
          transform="rotate(-30 368.81 451.453)"
        />
        <path fill="#f7aa00" d="M455.989 241h51.38v30h-51.38z" />
        <path
          fill="#f7aa00"
          d="M343.15 45.556h51.38v30h-51.38z"
          transform="rotate(-60 368.845 60.563)"
        />
        <path
          fill="#fcbe2c"
          d="M405.125 256c0-82.228-66.897-149.125-149.125-149.125v298.25c82.228 0 149.125-66.897 149.125-149.125z"
        />
        <g fill="#f7aa00">
          <path d="M256 0h15v80.378h-15zM256 431.622h15V512h-15z" />
        </g>
      </svg>
    </div>
  );
}
