import React from "react";
import "./Comment.scss";
import DetailsButtons from "../DetailsButtons/DetailsButtons";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions/index";

export default function Comment({
  children,
  userImage,
  specialCommentStyle,
  whoCommentedOnThisQuestion,
  description,
  userComment,
}) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const dispatch = useDispatch();

  return (
    <div
      className="CommentBoxStyle"
      style={{
        background: `${stateToProps.themeColors.background}`,
        color: `${stateToProps.themeColors.color}`,
      }}
    >
      <div className="commentBorder">
        <div
          className="CommentInitials"
          style={{
            background: `${stateToProps.themeColors.background}`,
            color: `${stateToProps.themeColors.color}`,
          }}
        >
          <div className="CommentImage">
          <img src={`https://res.cloudinary.com/dyojwpsfb/${userImage}`} alt="" />
          </div>
          <div
            className="initials"
            style={{
              background: `${stateToProps.themeColors.background}`,
              color: `${stateToProps.themeColors.color}`,
            }}
          >
            <h3>{whoCommentedOnThisQuestion}</h3>
            <p className="CommentCareer">{description} </p>
          </div>
        </div>
        <div
          className="CommentAnswer"
          style={{
            background: `${stateToProps.themeColors.background}`,
            color: `${stateToProps.themeColors.color}`,
          }}
        >
          <p
            className="Comment"
            style={{
              background: `${stateToProps.themeColors.background}`,
              color: `${stateToProps.themeColors.color}`,
            }}
          >
            {userComment}
          </p>
        </div>
        {/* <DetailsButtons /> */}
        {children}
      </div>
    </div>
  );
}
