import React from 'react';

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          version="1"
          viewBox="0 0 128 128"
        >
          <g>
            <path d="M76.34 52.05l-43.6-43.6a63.42 63.42 0 0129.7-8.2zm4.2 7.7L64.64.2A63.32 63.32 0 0194.44 8zm-.08 8.86l16-59.5a63.32 63.32 0 0121.94 21.6zm-4.5 7.6l43.62-43.5a63.32 63.32 0 018.17 29.7zm-7.7 4.4l59.56-15.9a63.32 63.32 0 01-7.78 29.8zm-8.86-.1l59.56 16a63.32 63.32 0 01-21.66 22zM51.8 76l43.58 43.63a63.32 63.32 0 01-29.72 8.17zm-4.36-7.7l15.92 59.6a63.32 63.32 0 01-29.82-7.8zm.1-8.83l-16 59.55A63.3 63.3 0 019.6 97.3zm4.5-7.62L8.44 95.4a63.32 63.32 0 01-8.2-29.72zm7.7-4.33L.16 63.36a63.32 63.32 0 017.8-29.8zm8.85.1L9 31.56A63.32 63.32 0 0130.68 9.6z" />
            <animateTransform
              attributeName="transform"
              dur="800ms"
              from="0 64 64"
              repeatCount="indefinite"
              to="30 64 64"
              type="rotate"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
