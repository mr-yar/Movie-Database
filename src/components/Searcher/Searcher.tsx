import React, {KeyboardEvent, useContext, useState} from 'react';
import {Link, useHistory, useRouteMatch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchMovieAction} from '../../redux/modules/search/searchReducer';
import {Container} from '../../common/common.styles';
import {
  InputWrapper,
  MenuSectionText,
  SearcherMenu,
  SearcherSectionTitle,
  SearcherWrapper,
  SearchInput,
  StyledSearcher
} from './Searcher.styles';
import {MainThemeContext} from '../../styles/theme';

export function Searcher(): JSX.Element {
  const BLACK = useContext(MainThemeContext).color.main;
  const dispatch = useDispatch();
  const history = useHistory();
  const {path} = useRouteMatch();

  const isSearching = path === '/search';

  const [inputState, setInputState] = useState('');

  const handleEnterDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' && inputState.trim() !== '') {
      dispatch(searchMovieAction(inputState));
      history.push('/search');
    }
  };

  return (
    <StyledSearcher>
      <Container>
        <SearcherWrapper>
          <SearcherSectionTitle>Featured movies</SearcherSectionTitle>
          <SearcherMenu>
            <Link to="/">
              <MenuSectionText style={!isSearching ? {color: BLACK} : {}}>
                New Realised
              </MenuSectionText>
            </Link>
            <MenuSectionText> / </MenuSectionText>
            <Link to="/search">
              <MenuSectionText style={isSearching ? {color: BLACK} : {}}>
                Search movies
              </MenuSectionText>
            </Link>
          </SearcherMenu>
          <InputWrapper>
            <SearchInput
              type="text"
              placeholder="Search..."
              autoComplete="off"
              onChange={(event) => setInputState(event.target.value)}
              onKeyPress={(event) => handleEnterDown(event)}
            />
          </InputWrapper>
        </SearcherWrapper>
      </Container>
    </StyledSearcher>
  );
}
