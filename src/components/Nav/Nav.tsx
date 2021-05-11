import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {ListMovies} from '../../common/Icons/ListMovies';
import {Clapperboard} from '../../common/Icons/Clapperboard';
import {Container} from '../../common/common.styles';
import {NavIcon, NavLogo, NavMenu, NavWrapper, StyledNav, Username} from './Nav.styles';

export function Nav(): JSX.Element {
  const {path} = useRouteMatch();

  // const themeMode = useSelector(
  //   (state: RootState) => state.themeModeReducer.isDarkModeOn
  // );

  // function themeHandler() {
  //   if (themeMode) {
  //     dispatch(darkModeOffAction());
  //   } else {
  //     dispatch(darkModeOnAction());
  //   }
  // }

  const isMoviePage = path === '/movie';

  return (
    <StyledNav>
      <Container>
        <NavWrapper>
          <NavLogo>
            <Link to="/">
              Movie
              {' '}
              <span>Database</span>
            </Link>
          </NavLogo>
          <NavMenu>
            <Link to="/">
              <NavIcon>
                <ListMovies isActive={!isMoviePage} />
              </NavIcon>
            </Link>
            <Link to="/movie">
              <NavIcon>
                <Clapperboard isActive={isMoviePage} />
              </NavIcon>
            </Link>
          </NavMenu>
          {/* <Switch */}
          {/*  checked={themeMode} */}
          {/*  onChange={themeHandler} */}
          {/*  offColor="#00cbbb" */}
          {/*  onColor="#2b4c99" */}
          {/*  uncheckedIcon={<Sun />} */}
          {/*  checkedIcon={<Moon />} */}
          {/*  width={70} */}
          {/*  height={35} */}
          {/* /> */}
          <Username>John Doe</Username>
        </NavWrapper>
      </Container>
    </StyledNav>
  );
}
