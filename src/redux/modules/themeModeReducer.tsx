import {createSlice} from '@reduxjs/toolkit';

const initialState = {isDarkModeOn: false};
const themeModeSlice = createSlice({
  name: 'THEME',
  initialState,
  reducers: {
    darkModeOnAction(state) {
      state.isDarkModeOn = true;
    },
    darkModeOffAction(state) {
      state.isDarkModeOn = false;
    },
    modeChangeAction(state) {
      state.isDarkModeOn = !state.isDarkModeOn;
    }
  }
});

export const {darkModeOnAction} = themeModeSlice.actions;
export const {darkModeOffAction} = themeModeSlice.actions;
export const {modeChangeAction} = themeModeSlice.actions;
export const themeModeReducer = themeModeSlice.reducer;
