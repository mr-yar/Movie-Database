import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import {rootWatcher} from './sagas/rootSaga';
import {moviesReducer} from './reducers/moviesReducer';
import {selectedMovieReducer} from './reducers/selectedMovieReducer';
import {searchReducer} from './reducers/searchReducer';

const persistedState = sessionStorage.getItem('selectedMovie')
  ? JSON.parse(localStorage.getItem('selectedMovie') as string)
  : {};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [logger, sagaMiddleware];

export const store = configureStore({
  reducer: {moviesReducer, selectedMovieReducer, searchReducer},
  // preloadedState: persistedState,
  middleware: middlewares,
  devTools: process.env.NODE_ENV !== 'production'
});

sagaMiddleware.run(rootWatcher);

// store.subscribe(() => {
//   sessionStorage.setItem('selectedMovie', JSON.stringify(store.getState()));
// });

export type RootState = ReturnType<typeof store.getState>;
