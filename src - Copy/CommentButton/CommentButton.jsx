import React from "react";
import "./CommentButton.scss";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions";

export default function CommentButton({ children, specialStyle, comments, commentProps }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const dispatch = useDispatch();

  return (
    <div
      className="CommentButton"
      style={{ color: `${stateToProps.themeColors.color}` }}
    >
      <span onClick={comments}>
        <i className="fas fa-comments"></i>{`${commentProps} comments`}
      </span>
    </div>
  );
}
