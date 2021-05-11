import {createAction} from '@reduxjs/toolkit';

const DARK_MODE_ON_ACTION = 'THEME/darkModeOnAction';
const DARK_MODE_OFF_ACTION = 'THEME/darkModeOffAction';
const MODE_CHANGE_ACTION = 'THEME/modeChangeAction';

export const darkModeOnAction = createAction(DARK_MODE_ON_ACTION);
export const darkModeOffAction = createAction(DARK_MODE_OFF_ACTION);
export const modeChangeAction = createAction(MODE_CHANGE_ACTION);
