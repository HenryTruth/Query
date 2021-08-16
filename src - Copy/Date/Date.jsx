import React from "react";
import "./Date.scss";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions";

export default function Date({ children, specialStyle,dateProps }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const dispatch = useDispatch();
  

  return (
    <div
      className="Date"
      style={{ color: `${stateToProps.themeColors.color}` }}
    >
      <span>
        <i className="far fa-clock"></i>
         {/* {`${dateProps.slice(0, 10)} `}  */}
      </span>
    </div>
  );
}
