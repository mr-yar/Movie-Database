import styled from 'styled-components';

export const StyledSearcher = styled.div`
  padding: 2rem;
  font-family: Roboto, sans-serif;
  background: #edeff0;
  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const SearcherWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    text-align: center;
  }
`;

export const SearcherSectionTitle = styled.h1`
  margin: 0;
  font-size: 2.7rem;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
`;

export const SearcherMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const MenuSectionText = styled.span<any>`
  font-family: Calibri, sans-serif;
  font-size: 2rem;
  font-weight: 400;
  color: #989ca4;
  padding-left: 1rem;
`;

export const InputWrapper = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin: 2rem 1rem;
  &::after {
    position: absolute;
    left: 0;
    right: 0;
    width: 100%;
    content: '';
    bottom: -0.4rem;
    height: 0.2rem;
    background-color: ${(props) => props.theme.color.main};
    opacity: 0.2;
  }
`;

export const SearchInput = styled.input`
  border: none;
  position: relative;
  background: #edeff0;
  color: ${(props) => props.theme.color.main};
  font-family: 'Arial MT', sans-serif;
  font-size: 2rem;
  font-weight: 400;
  font-style: italic;
  ::placeholder {
    color: #9b9ea3;
  }
  :hover,
  :active,
  :focus {
    outline: none;
  }
`;
