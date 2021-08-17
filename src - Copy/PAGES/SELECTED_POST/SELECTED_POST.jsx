import React from "react";
import "./SELECTED_POST.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import AnswerBox from "../../AnswerBox/AnswerBox";
import Comment from "../../Comment/Comment";
import CurrentPageIdentifier from "../../CurrentPageIdentifier/CurrentPageIdentifier";
import CreateQuestionButton from "../../CreateQuestionButton/CreateQuestionButton";
import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import CommentButton from "../../CommentButton/CommentButton";
import Like from "../../Like/Like";
import AnswerButton from "../../AnswerButton/AnswerButton";
import Date from "../../Date/Date";

export default function HOME_PAGE() {
  return (
    <div className="SELECTED_POST">
      <CreateQuestionButton> Add Answer</CreateQuestionButton>
      <CurrentPageIdentifier>
        <i className="far fa-home"></i>feeds
      </CurrentPageIdentifier>

      <div className="feedActivity">
        <div className="questionActivity">
          <QuestionBox>
            <DetailsButtons>
              <Date />
              <CommentButton />
              <CommentButton />
              <CommentButton />
              <CommentButton />
            </DetailsButtons>{" "}
          </QuestionBox>
        </div>

        <div className="answerActivity">
          <AnswerBox>
            <DetailsButtons>
              <Date />
              <AnswerButton />
              <Like />
              <CommentButton />
            </DetailsButtons>
          </AnswerBox>
        </div>

        <div className="answerActivity">
          <AnswerBox>
            <DetailsButtons>
              <Date />
              <CommentButton />
            </DetailsButtons>
          </AnswerBox>
        </div>
      </div>
    </div>
  );
}

{
  /* <QuestionBox></QuestionBox>

 */
}
