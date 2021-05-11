import {createReducer} from '@reduxjs/toolkit';
import {darkModeOffAction, darkModeOnAction, modeChangeAction} from './actions';

const initialState = {isDarkModeOn: false};

export const themeModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(darkModeOnAction, (state) => {
    state.isDarkModeOn = true;
  });
  builder.addCase(darkModeOffAction, (state) => {
    state.isDarkModeOn = false;
  });
  builder.addCase(modeChangeAction, (state) => {
    state.isDarkModeOn = !state.isDarkModeOn;
  });
});
