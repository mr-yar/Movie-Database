import styled from 'styled-components';

export const StyledMovies = styled.div`
  background: #edeff0;
  font-family: Roboto, sans-serif;
  min-height: 50vh;
`;

export const MoviesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem;

  @media screen and (max-width: 1400px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media screen and (max-width: 1200px) {
    grid-gap: 1rem;
  }
  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5rem;
  }
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-gap: 3rem;
  }
`;
