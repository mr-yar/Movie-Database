import styled from 'styled-components';

export const StyledHeader = styled.div<any>`
  position: relative;
  top: 0;
  background-color: ${(props) => props.theme.color.second};
  background-image: url(${(props) => props.bg});
  box-shadow: inset 0 0 100rem #000;
  background-size: cover;
  z-index: 99;

  ::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(0, 0, 0, 0.6);
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 2;
  font-family: Roboto, sans-serif;
  @media screen and (max-width: 992px) {
    height: 40vh;
  }
  @media screen and (max-width: 576px) {
    height: 60vh;
  }
`;

export const Paragraph = styled.div`
  color: #ffffff;
  text-align: right;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  padding-bottom: 0.8rem;
  span {
    color: ${(props) => props.theme.color.accent};
    font-family: Calibri, sans-serif;
    font-size: 2.2rem;
    font-weight: 400;
    margin-left: 1rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.8rem;
    padding-bottom: 0.8rem;
    span {
      font-size: 2rem;
      margin-left: 1rem;
    }
  }
`;


export const InfoSection = styled.div`
  text-align: right;
  padding: 2rem;
`;
