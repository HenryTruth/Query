import React from "react";
import "./AnswerBox.scss";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function AnswerBox({
  children,
  userImage,
  specialAnswerStyle,
  whoAnsweredThisQuestion,
  description,
  userAnswer,
}) {
  // const stateToProps.themeColors = useSelector((state) => state.stateToProps.themeColors);
  const stateToProps = useSelector(state => 
    state.modesReducer)
  let location = useLocation();



  console.log(location.pathname, "from");

  return (
    <div
      className={`AnswerBoxStyle `}
      style={{
        background: `${
          location.pathname !== "/" ? stateToProps.themeColors.background : "#ffffff"
        }`,
        color: `${
          location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
        }`,
      }}
    >
      <div
        className="AnswerInitials"
        style={{
          background: `${
            location.pathname !== "/" ? stateToProps.themeColors.background : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
          }`,
        }}
      >
        <div className="userImage">
        <img src={`https://res.cloudinary.com/dyojwpsfb/${userImage}`} alt="" />
        </div>
        <div
          className="initials"
          style={{
            background: `${
              location.pathname !== "/"
                ? stateToProps.themeColors.background
                : "#ffffff"
            }`,
            color: `${
              location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
            }`,
          }}
        >
          <h3>{whoAnsweredThisQuestion}</h3>
          <p className="UserCareer">{description}</p>
        </div>
      </div>
      <div
        className={`UserAnswer `}
        style={{
          background: `${
            location.pathname !== "/" ? stateToProps.themeColors.background : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
          }`,
        }}
      >
        <p className={`Answer ${specialAnswerStyle}`}>{userAnswer}</p>
      </div>

      {children}
    </div>
  );
}
