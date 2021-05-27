import styled from 'styled-components';

export const Grid = styled.div`
  @media screen and (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
`;

export const GridValue = styled.div`
  font-size: 2rem;
  font-weight: 500;
  @media screen and (max-width: 576px) {
    font-size: 2rem;
    order: 2;
  }
`;

export const GridCategory = styled.div`
  font-size: 1.6rem;
  padding-top: 0.5rem;
  font-weight: 300;
  color: ${(props) => props.theme.color.second};
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    padding-top: 5rem;
     {
      position: relative;
      font-size: 2rem;
      margin-right: 1rem;
      padding: 0;
      order: 1;
      &::after {
        position: absolute;
        content: ': ';
        top: 0;
        right: -0.4rem;
        color: #fff;
      }
    }
  }
`;
