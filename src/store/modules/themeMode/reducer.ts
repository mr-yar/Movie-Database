import {createReducer} from '@reduxjs/toolkit';
import {darkModeOffAction, darkModeOnAction, modeChangeAction} from './actions';

const initialState = {isDarkModeOn: false, selectedTheme: 'light'};

export const themeModeReducer = createReducer(initialState, (builder) => {
  builder.addCase(darkModeOnAction, (state) => {
    state.isDarkModeOn = true;
    state.selectedTheme = 'dark';
  });
  builder.addCase(darkModeOffAction, (state) => {
    state.isDarkModeOn = false;
    state.selectedTheme = 'light';
  });
  builder.addCase(modeChangeAction, (state) => {
    state.isDarkModeOn = !state.isDarkModeOn;
  });
});
