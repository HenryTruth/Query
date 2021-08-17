import * as actionTypes from './actionTypes';

export const changemodes = (mode, text, color) => {
    return { type: "TOGGLE_MODES", mode, text, color};
  };
  

export const modeChanger = (mode, text, color) => {
  return dispatch => {
    dispatch(changemodes(mode,text,color))
    localStorage.setItem('mode',mode)
    localStorage.setItem('color',color)
    localStorage.setItem('text',text)
  }
}