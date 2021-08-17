import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./HOME_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import CurrentPageIdentifier from "../../CurrentPageIdentifier/CurrentPageIdentifier";
import { Redirect } from "react-router-dom";
import user7 from "../../assets/user7.jpg";
import user5 from "../../assets/user5.jpg";
import user8 from "../../assets/user8.jpg";
import user2 from "../../assets/user2.jpg";
import CreateQuestionButton from "../../CreateQuestionButton/CreateQuestionButton";
import Comment from "../../Comment/Comment";
import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";

import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import CommentButton from "../../CommentButton/CommentButton";
import { useSelector, useDispatch } from "react-redux";
import { changemodes } from "../../actions";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";

export default function HOME_PAGE() {
  useEffect(() => {}, []);

  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();

  const specialQuestionStyle = {
    border: "1px solid  rgba(128, 128, 128, 0.267)",
  };
  const redirectHandler = () => {
    Redirect("/post");
  };

  return (
    <div
      className="homePage"
      style={{ background: `${modes.themeColors.background}` }}
    >
      <CreateQuestionButton>Ask A Question</CreateQuestionButton>

      <CurrentPageIdentifier to="/">
        <i
          className="far fa-home"
          style={{ color: `${modes.themeColors.color}` }}
        ></i>
        <span style={{ color: `${modes.themeColors.color}` }}>Home</span>
      </CurrentPageIdentifier>
      <div className="questionHolder">
        <QuestionSkeletonLoader />
        <QuestionSkeletonLoader />
        <QuestionSkeletonLoader />
        <QuestionSkeletonLoader />
        <QuestionSkeletonLoader />
        <QuestionSkeletonLoader />

        <Link to="/getpost" style={{ textDecoration: "none" }}>
          <QuestionBox
            specialQuestionStyle={specialQuestionStyle}
            userImage={user7}
            whoAskedThisQuestion="Danny Goere"
            description="Designer"
            userQuestion="Question i dont feel like asking any question, just show
          me the way out of here !!"
          >
            <DetailsButtons>
              <Like />
              <AnswerButton />
              <Date />
            </DetailsButtons>
          </QuestionBox>
        </Link>

        <Link to="/getpost" style={{ textDecoration: "none" }}>
          <QuestionBox
            specialQuestionStyle={specialQuestionStyle}
            userImage={user8}
            whoAskedThisQuestion="Thomas mark"
            description="Plumber"
            userQuestion="What is the meaning of aristotle"
          >
            <DetailsButtons>
              <Like />
              <AnswerButton />
              <Date />
            </DetailsButtons>
          </QuestionBox>
        </Link>
        <Link to="/getpost" style={{ textDecoration: "none" }}>
          <QuestionBox
            specialQuestionStyle={specialQuestionStyle}
            userImage={user5}
            whoAskedThisQuestion="Rhieo Sisy"
            description="Plumber"
            userQuestion="What is the term 'EDUCATION' all about? "
          >
            <DetailsButtons>
              <Like />
              <AnswerButton />
              <Date />
            </DetailsButtons>
          </QuestionBox>
        </Link>
      </div>
    </div>
  );
}
