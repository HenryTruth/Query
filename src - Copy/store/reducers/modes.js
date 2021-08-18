import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';



const userModes = {
  modeColor: 'White',
  themeColors: "",
  modeText: "Dark Mode",
};
console.log(userModes, "initial state");

const changemodes = (state, action) => {
  return updateObject( state,{
    modeColor: action.mode,
    themeColors: action.color,
    modeText: action.text

  })
}

const reducer = (state = userModes, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MODES:return changemodes(state, action)
    default:
      return state;
  }
};

export default reducer

