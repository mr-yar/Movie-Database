import React, {KeyboardEvent, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {searchMovieAction} from '../../store/modules/search/actions';
import {Container, StyledNavLink} from '../../common/common.styles';
import {
  InputWrapper,
  MenuSectionText,
  SearcherMenu,
  SearcherSectionTitle,
  SearcherWrapper,
  SearchInput,
  StyledSearcher
} from './Searcher.styles';

export function Searcher(): JSX.Element {
  const dispatch = useDispatch();
  const history = useHistory();

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
            <StyledNavLink exact to="/" activeClassName="selected">
              <MenuSectionText>New Realised</MenuSectionText>
            </StyledNavLink>
            <MenuSectionText> / </MenuSectionText>
            <StyledNavLink exact to="/search" activeClassName="selected">
              <MenuSectionText>Search movies</MenuSectionText>
            </StyledNavLink>
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
