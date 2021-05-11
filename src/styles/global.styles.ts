import {createGlobalStyle} from 'styled-components';
import {normalize} from 'styled-normalize';

export const GlobalStyle = createGlobalStyle<any>`

${normalize}


html {
  font-size: 62.5%;
  color: ${(props) => props.theme.color.main};
}
html{
  color: #ffffff;
}

a {
  color: #ffffff;
  text-decoration: none;
}
@media screen and (max-width: 1200px) {
  html {
    font-size: 50%;
  }
}
@media screen and (max-width: 992px) {
  html {
    font-size: 60%;
  }
}
@media screen and (max-width: 768px) {
  html {
    font-size: 60%;
  }
}`;
