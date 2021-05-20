import styled from 'styled-components';

export const StyledNav = styled.nav`
  font-family: Roboto, sans-serif;
  position: sticky;
  top: 0;
  z-index: 999;
  background: ${(props) => props.theme.color.bg};
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const NavLogo = styled.div`
  text-align: left;
  flex-basis: 33%;
  a {
    color: ${(props) => props.theme.color.mainText};
    font-size: 2.2rem;
    font-weight: 700;
    text-transform: uppercase;
  }
  a span {
    color: ${(props) => props.theme.color.accent};
  }
  a:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const NavMenu = styled.div`
  text-align: center;
  flex-basis: 33%;
  @media screen and (max-width: 576px) {
    display: flex;
  }
`;

export const NavIcon = styled.div`
  display: inline-block;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 3.5rem;
  height: 3.5rem;
  :hover {
    opacity: 0.8;
  }
`;

export const Username = styled.div`
  text-align: right;
  flex-basis: 33%;
  font-size: 1.8rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.secondText};
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

export const SwitchWrapper = styled.div`
  flex-basis: 33%;
  text-align: end;
`;
