import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, NavLink, useRouteMatch} from 'react-router-dom';
import Switch from 'react-switch';
import {RootState} from '../../store';
import {darkModeOffAction, darkModeOnAction} from '../../store/modules/themeMode/actions';
import {ListMovies} from '../../common/Icons/ListMovies';
import {Clapperboard} from '../../common/Icons/Clapperboard';
import Moon from '../../common/Icons/Moon';
import Sun from '../../common/Icons/Sun';
import {Container} from '../../common/common.styles';
import {
  NavIcon,
  NavLogo,
  NavMenu,
  NavWrapper,
  StyledNav,
  SwitchWrapper
} from './Nav.styles';

export function Nav(): JSX.Element {
  const dispatch = useDispatch();
  const {path} = useRouteMatch();

  const themeMode = useSelector(
    (state: RootState) => state.themeModeReducer.isDarkModeOn
  );

  function themeHandler() {
    if (themeMode) {
      dispatch(darkModeOffAction());
    } else {
      dispatch(darkModeOnAction());
    }
  }

  const isMoviePage = path === '/movie';

  return (
    <StyledNav>
      <Container>
        <NavWrapper>
          <NavLogo>
            <Link to="/">
              Movie <span>Database</span>
            </Link>
          </NavLogo>
          <NavMenu>
            <NavLink exact to="/">
              <NavIcon>
                <ListMovies isActive={!isMoviePage} />
              </NavIcon>
            </NavLink>
            <NavLink exact to="/movie">
              <NavIcon>
                <Clapperboard isActive={isMoviePage} />
              </NavIcon>
            </NavLink>
          </NavMenu>
          <SwitchWrapper>
            <Switch
              checked={themeMode}
              onChange={themeHandler}
              offColor="#00cbbb"
              onColor="#2b4c99"
              uncheckedIcon={<Sun />}
              checkedIcon={<Moon />}
              width={70}
              height={35}
            />
          </SwitchWrapper>

          {/* <Username>John Doe</Username> */}
        </NavWrapper>
      </Container>
    </StyledNav>
  );
}
