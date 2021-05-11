import styled from 'styled-components';
import {lighten} from 'polished';

export const Container = styled.div`
  width: 90vw;
  margin: auto;
`;

export const Button = styled.button`
  display: inline-block;
  margin: 0 auto 2rem;
  background-color: ${(props) => props.theme.color.accent};
  color: #ffffff;
  font-size: 1.4rem;
  font-weight: 700;
  border-radius: 0.5rem;
  box-shadow: none;
  border: none;
  text-transform: uppercase;

  :hover {
    cursor: pointer;
    background-color: ${(props) => lighten(0.15, props.theme.color.accent)}};
  }
  :active {
    outline: none;
  }
  :focus {
    outline: none;
  }
  a {
    display: block;
    padding: 1.4rem 4.7rem;
  }
`;
