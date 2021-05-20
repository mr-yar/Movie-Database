import styled from 'styled-components';

export const StyledMovieBox = styled.div`
  position: relative;
  ::after {
    transition: all 0.3s ease;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: #000000;
    z-index: 1;
    opacity: 0;
  }
  :hover {
    cursor: pointer;
  }
  :hover div {
    opacity: 1;
  }
  :hover::after {
    opacity: 0.7;
  }
  img {
    height: 100%;
    width: 100%;
  }
`;

export const Info = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  padding: 10%;
  width: 80%;
  opacity: 0;
  z-index: 4;
  top: 0;
  left: 0;
  color: #ffffff;
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 1.7rem;
`;

export const InfoIcon = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  div {
    width: 1.7rem;
    height: 1.7rem;
    margin-right: 1.7rem;
  }
`;

export const ReleaseDate = styled.div`
  font-weight: 700;
  span {
    font-weight: 400;
    font-family: Calibri, sans-serif;
    font-size: 1.7rem;
  }
`;

export const OriginalTitle = styled.div`
  margin-top: 1rem;
  color: ${(props) => props.theme.color.secondText};
`;

export const MovieBoxName = styled.div`
  position: absolute;
  color: #ffffff;
  font-size: 1.8rem;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  bottom: 2rem;
  left: 2rem;
  text-shadow: 4px 4px 10px rgba(0, 0, 0, 0.9);
`;
