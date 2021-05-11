import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import ISO6391 from 'iso-639-1';
import {TSelectedMovieState} from '../../../common/types';

const initialState: TSelectedMovieState = {
  selectedMovie: {
    backdropPath: '',
    budget: '',
    cast: [],
    crew: {director: '', directorOfPhotography: '', composer: ''},
    certification: '',
    genres: '',
    homepage: '',
    originalLanguage: '',
    originalTitle: '',
    overview: '',
    posterPath: '',
    releaseDate: '',
    revenue: '',
    runtime: '',
    tagline: '',
    title: '',
    video: '',
    voteAverage: 0,
    voteCount: 0
  },
  selectedMovieId: 0,
  loading: false
};

export const selectedMovieSlice = createSlice({
  name: 'SELECTED_MOVIE',
  initialState,
  reducers: {
    loadSelectedMovieAction(state, action: PayloadAction<number>) {
      state.loading = true;
      state.selectedMovieId = action.payload;
    },
    putSelectedMovieAction(state, action: PayloadAction<any>) {
      state.loading = false;

      const movie = action.payload;
      console.log(movie);
      const director = movie.credits.crew.find(
        (item: any) => item.job === 'Director'
      )
        ? movie.credits.crew.find((item: any) => item.job === 'Director').name
        : 'Unknown';
      const directorOfPhotography = movie.credits.crew.find(
        (item: any) => item.job === 'Director of Photography'
      )
        ? movie.credits.crew.find(
          (item: any) => item.job === 'Director of Photography'
        ).name
        : 'Unknown';
      const composer = movie.credits.crew.find(
        (item: any) => item.job === 'Original Music Composer'
      )
        ? movie.credits.crew.find(
          (item: any) => item.job === 'Original Music Composer'
        ).name
        : 'Unknown';

      const ageRank = movie.release_dates.results.find(
        (item: any) => item.iso_3166_1 === 'US'
      )
        ? movie.release_dates.results.find((item: any) => item.iso_3166_1 === 'US')
          .release_dates[0].certification
        : 'NR';

      state.selectedMovie = {
        backdropPath: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`,
        budget: (Math.round(movie.budget) || 'Unknown').toString(),
        cast: [
          {
            id: 0,
            name: movie.credits.cast[0].name ?? '',
            character: movie.credits.cast[0].character ?? ''
          },
          {
            id: 1,
            name: movie.credits.cast[1].name ?? '',
            character: movie.credits.cast[1].character ?? ''
          },
          {
            id: 2,
            name: movie.credits.cast[2].name ?? '',
            character: movie.credits.cast[2].character ?? ''
          },
          {
            id: 3,
            name: movie.credits.cast[3].name ?? '',
            character: movie.credits.cast[3].character ?? ''
          },
          {
            id: 4,
            name: movie.credits.cast[4].name ?? '',
            character: movie.credits.cast[4].character ?? ''
          }
        ],
        crew: {
          director,
          directorOfPhotography,
          composer
        },
        certification: ageRank,
        genres: movie.genres[0].name ?? `${movie.genres[1].name}` ?? '',
        homepage: movie.homepage,
        id: movie.id,
        originalLanguage: ISO6391.getName(movie.original_language),
        originalTitle: movie.original_title,
        overview: movie.overview,
        posterPath: movie.poster_path,
        releaseDate: movie.release_date,
        revenue: (Math.round(movie.revenue) || 'Unknown').toString(),
        runtime: movie.runtime,
        tagline: movie.tagline,
        title: movie.title,
        video: `https://www.youtube.com/watch?v=${movie.videos.results[0].key}`,
        voteAverage: movie.vote_average ?? 0,
        voteCount: movie.vote_count ?? 0
      };
    }
  }
});

export const {
  loadSelectedMovieAction,
  putSelectedMovieAction
} = selectedMovieSlice.actions;
export const selectedMovieReducer = selectedMovieSlice.reducer;
