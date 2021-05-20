import styled from 'styled-components';

export const ResultTitle = styled.h1`
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.color.bg};
  color: ${(props) => props.theme.color.mainText};
  margin: 0;
  padding: 2rem;
`;

export const TitleNotFound = styled.h1`
  color: ${(props) => props.theme.color.mainText};
  font-family: Roboto, sans-serif;
  text-align: center;
  margin: 0;
  padding: 2rem;
`;
