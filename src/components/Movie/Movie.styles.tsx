import React from 'react';
import styled from 'styled-components';

export const StyledMovie = styled.div<any>`
  position: relative;
  box-shadow: inset 0 0 1100rem #000;
  background-size: cover;
  z-index: 1;
  background-blend-mode: saturation;
  padding-top: 10rem;
  background-image: linear-gradient(black, black),
    url(https://image.tmdb.org/t/p/original/${(props) => props.bg});
  padding-bottom: 10rem;
  @media screen and (max-width: 992px) {
    padding-top: 8rem;
    padding-bottom: 8rem;
    min-height: 80vh;
  }
  &::after {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(3px);
    z-index: -1;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 992px) {
    justify-content: center;
  }
`;

export const MovieInfo = styled.div`
  flex-basis: 50%;
  font-family: Roboto, sans-serif;
  color: #ffffff;
  @media screen and (max-width: 992px) {
    text-align: center;
    flex-basis: 90%;
  }
`;

export const MovieTitle = styled.h1`
  margin: 0;
  font-family: Staatliches, sans-serif;
  font-size: 4.2rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
  @media screen and (max-width: 576px) {
    font-size: 3.2rem;
    margin-bottom: 2rem;
  }
  span {
    color: ${(props) => props.theme.color.second};
  }
`;

export const MovieSubtitle = styled.div`
  font-family: Arial, sans-serif;
  font-size: 1.8rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  @media screen and (max-width: 992px) {
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 576px) {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
  @media screen and (max-width: 576px) {
    font-size: 1.6rem;
  }
  span {
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }
`;

export const PosterAndCast = styled.div`
  flex-basis: 33%;
  position: relative;
  margin-right: 10rem;
  text-align: center;
  font-family: Roboto, sans-serif;
  img {
    width: 70%;
  }
  @media screen and (max-width: 992px) {
    display: none;
  }
`;
export const CastTitle = styled.div`
  text-align: center;
  font-size: 3.6rem;
  font-weight: 500;
  text-transform: uppercase;
  color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 1.5rem;
`;

export const Person = styled.div`
  text-align: center;
  color: #ffffff;
  font-size: 2rem;
  font-weight: 400;
  padding: 0.7rem;
  span {
    color: ${(props) => props.theme.color.second};
    font-weight: 400;
    font-style: italic;
  }
`;
export const TrailerLink = styled.div`
  font-family: Staatliches, sans-serif;
  font-size: 6.6rem;
  padding-top: 10rem;
  text-align: center;
  letter-spacing: 0.2rem;

  a {
    position: relative;
  }

  a::after {
    position: absolute;
    width: 0;
    content: '';
    bottom: 0;
    margin: auto;
    left: 0;
    right: 0;
    height: 0.2rem;
    background-color: #ffffff;
  }
  a:hover::after {
    width: 100%;
    transition: all 0.2s ease;
  }
  @media screen and (max-width: 576px) {
    font-size: 4rem;
    padding-top: 6rem;
  }
`;

export const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-row-gap: 5rem;
  padding-top: 8rem;
  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
    grid-row-gap: 1rem;
    padding-top: 5rem;
  }
`;

export const Indicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  font-size: 2.2em;
  font-weight: 600;
  color: #ffffff;
  user-select: none;
`;

export const UserScore = styled.div`
  display: flex;
  align-items: center;
  padding-top: 4rem;
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export const UserScoreSubtitle = styled.div`
  font-family: Arial, sans-serif;
  font-size: 2rem;
  font-weight: 700;
  width: 6rem;
`;

export const Overview = styled.div`
  padding-top: 5rem;
`;

export const OverviewTitle = styled.div`
  font-size: 3.6rem;
  font-weight: 500;
`;

export const OverviewText = styled.div`
  padding-top: 1.4rem;
  font-size: 2rem;
  font-weight: 400;
`;

export const SecondaryText = styled.span`
  color: ${(props) => props.theme.color.second}
`;

export const Dot = (): JSX.Element => <span style={{fontSize: '3rem'}}>·</span>;
