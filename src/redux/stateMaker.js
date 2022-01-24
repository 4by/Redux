import { combineReducers } from 'redux';
import { INC, DEC, THEME } from './dispArgs';

function counterStateReducer(state = 0, action) {
  switch (action.type) {
    case INC.type: return ++state;
    case DEC.type: return --state;
    default: return state;
  }
}

function themeStateReducer(state = { value: 'light' }, action) {
  const color = document.body.classList.contains('dark') ? 'light' : 'dark';
  switch (action.type) {
    case THEME.type: return { ...state, value: color };
    default: return state;
  }
}

export const stateMaker = combineReducers(
  {
    counterState: counterStateReducer,
    themeState: themeStateReducer,
  },
);
