import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {TSelectedMovie} from '../../common/types';
import {Button, Container} from '../../common/common.styles';
import {
  HeaderWrapper,
  InfoSection,
  Paragraph,
  StyledHeader
} from './Header.style';

export function Header({movie}: {movie: TSelectedMovie}): JSX.Element {
  const isFetchingSelectedMovie = useSelector(
    (state: RootState) => state.selectedMovieReducer.loading
  );

  const {crew, backdropPath, genres, id, releaseDate, tagline, title} = movie;

  const [year] = releaseDate.split('-');

  if (isFetchingSelectedMovie || !id) {
    return (
      <StyledHeader>
        <Container>
          <HeaderWrapper>
            <InfoSection>
              <Paragraph>Name:</Paragraph>
              <Paragraph>Director(&apos;s):</Paragraph>
              <Paragraph>Genre:</Paragraph>
              <Paragraph>Year:</Paragraph>
            </InfoSection>
          </HeaderWrapper>
        </Container>
      </StyledHeader>
    );
  }

  return (
    <StyledHeader bg={backdropPath}>
      <Container>
        <HeaderWrapper>
          <InfoSection>
            <Paragraph>
              Name:
              {' '}
              <span>{title}</span>
            </Paragraph>
            <Paragraph>
              Director(&apos;s):
              {' '}
              <span>{crew.director}</span>
            </Paragraph>
            <Paragraph>
              Genre:
              {' '}
              <span>{genres}</span>
            </Paragraph>
            <Paragraph>
              Year:
              {' '}
              <span>{year}</span>
            </Paragraph>
            <Paragraph style={{opacity: 0.7}}>{tagline}</Paragraph>
          </InfoSection>

          <Button>
            <Link to="/movie">More</Link>
          </Button>
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
}
