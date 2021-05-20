import {createGlobalStyle} from 'styled-components';
import RobotoBoldWoff from '../assets/fonts/Roboto/Roboto-Bold.woff';
import RobotoBoldWoff2 from '../assets/fonts/Roboto/Roboto-Bold.woff2';
import RobotoBlackWoff from '../assets/fonts/Roboto/Roboto-Black.woff';
import RobotoBlackWoff2 from '../assets/fonts/Roboto/Roboto-Black.woff2';
import RobotoBlackItalicWoff from '../assets/fonts/Roboto/Roboto-BlackItalic.woff';
import RobotoBlackItalicWoff2 from '../assets/fonts/Roboto/Roboto-BlackItalic.woff2';
import RobotoItalicWoff from '../assets/fonts/Roboto/Roboto-Italic.woff';
import RobotoItalicWoff2 from '../assets/fonts/Roboto/Roboto-Italic.woff2';
import RobotoBoldItalicWoff from '../assets/fonts/Roboto/Roboto-BoldItalic.woff';
import RobotoBoldItalicWoff2 from '../assets/fonts/Roboto/Roboto-BoldItalic.woff2';
import RobotoMediumItalicWoff from '../assets/fonts/Roboto/Roboto-MediumItalic.woff';
import RobotoMediumItalicWoff2 from '../assets/fonts/Roboto/Roboto-MediumItalic.woff2';
import RobotoMediumWoff from '../assets/fonts/Roboto/Roboto-Medium.woff';
import RobotoMediumWoff2 from '../assets/fonts/Roboto/Roboto-Medium.woff2';
import RobotoLightWoff from '../assets/fonts/Roboto/Roboto-Light.woff';
import RobotoLightWoff2 from '../assets/fonts/Roboto/Roboto-Light.woff2';
import RobotoLightItalicWoff from '../assets/fonts/Roboto/Roboto-LightItalic.woff';
import RobotoLightItalicWoff2 from '../assets/fonts/Roboto/Roboto-LightItalic.woff2';
import RobotoRegularWoff from '../assets/fonts/Roboto/Roboto-Regular.woff';
import RobotoRegularWoff2 from '../assets/fonts/Roboto/Roboto-Regular.woff2';
import StaatlichesRegularWoff from '../assets/fonts/Staatliches/Staatliches-Regular.woff';
import StaatlichesRegularWoff2 from '../assets/fonts/Staatliches/Staatliches-Regular.woff2';

export const Fonts = createGlobalStyle<any>`
@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldWoff2}) format('woff2'),
    url(${RobotoBoldWoff}) format('woff');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBlackWoff2}) format('woff2'),
    url(${RobotoBlackWoff}) format('woff');
  font-weight: 900;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBlackItalicWoff2}) format('woff2'),
    url(${RobotoBlackItalicWoff}) format('woff');
  font-weight: 900;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoItalicWoff2}) format('woff2'),
    url(${RobotoItalicWoff}) format('woff');
  font-weight: normal;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoBoldItalicWoff2}) format('woff2'),
    url(${RobotoBoldItalicWoff}) format('woff');
  font-weight: bold;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMediumItalicWoff2}) format('woff2'),
    url(${RobotoMediumItalicWoff}) format('woff');
  font-weight: 500;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoMediumWoff2}) format('woff2'),
    url(${RobotoMediumWoff}) format('woff');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLightWoff2}) format('woff2'),
    url(${RobotoLightWoff}) format('woff');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoLightItalicWoff2}) format('woff2'),
    url(${RobotoLightItalicWoff}) format('woff');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}

@font-face {
  font-family: 'Roboto';
  src: url(${RobotoRegularWoff2}) format('woff2'),
    url(${RobotoRegularWoff}) format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Staatliches';
  src: url(${StaatlichesRegularWoff2}) format('woff2'),
    url(${StaatlichesRegularWoff}) format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

`;
