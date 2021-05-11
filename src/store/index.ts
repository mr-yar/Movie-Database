import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import {rootWatcher} from './rootSaga';
import {moviesReducer} from './modules/movies/reducer';
import {selectedMovieReducer} from './modules/selectedMovie/reducer';
import {searchReducer} from './modules/search/reducer';
import {themeModeReducer} from './modules/themeMode/reducer';

const preloadedState = localStorage.getItem('selectedMovie')
  ? JSON.parse(localStorage.getItem('selectedMovie') as string)
  : {};

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {moviesReducer, selectedMovieReducer, searchReducer, themeModeReducer},
  preloadedState,
  middleware,
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootWatcher);

store.subscribe(() => {
  localStorage.setItem('selectedMovie', JSON.stringify(store.getState()));
});

export type RootState = ReturnType<typeof store.getState>;
