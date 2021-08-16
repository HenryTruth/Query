import React from "react";
import "./AnswerSkeletonLoader.scss";

import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function AnswerSkeletonLoader({
  children,
  userImage,
  specialQuestionStyle,
  whoAnsweredThisQuestion,
  description,
  userAnswer,
}) {
  return (
    <div className="AnswerSkeletonLoaderStyle">
      <div className="AnswerInitials">
        <div className="userImage">
        
        </div>
        <div className="initials">
          <h3>{whoAnsweredThisQuestion}</h3>
          <p className="UserCareer">{description}</p>
        </div>
      </div>
      <div className="UserAnswer">
        <p className="Answer">{userAnswer}</p>
      </div>

      {children}
    </div>
  );
}
