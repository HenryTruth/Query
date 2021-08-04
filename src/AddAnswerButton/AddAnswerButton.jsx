import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AddAnswerButton.scss";
import Modal from "../Modal/Modal";
import SquareButton from "../SquareButton/SquareButton";
import * as handlers from "./../ModalState";

import Question from "../QuestionBox/QuestionBox";
import AnswerBox from "../AnswerBox/AnswerBox";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../store/actions/index";


export default function AddAnswerButton({ children, questionId }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)

  const askedQuestionData = useSelector(state => state.answerReducer.displayAnsweredQuestion)

  const stateProfile = useSelector(state => state.profileReducer.userProfileData)
  
  const userState = useSelector(state => state.profileReducer.userDetail)
  const dispatch = useDispatch();

  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });

  const [userAnswer, SetUserAnswer] = useState(
    "Your answers is previewed here"
  );

  const openModal = () => {
    SetModalState({
      isModalClose: false,
      useThisId: "ModalIsOpenId",
    });
  };

  const closeModal = () => {
    SetModalState({
      isModalClose: true,
      useThisId: "ModalIsCloseId",
    });
  };

  const routeHome = () => {
    SetModalState({
      isModalClose: true,
      useThisId: "ModalIsCloseId",
    });

  }

  const sendAnswer = (event) => {
    event.preventDefault();
    dispatch(actions.postAnswer(userAnswer,questionId));
    routeHome();
    SetUserAnswer("Your answers is previewed here")
    // setTimeout(() => {
    //   window.location.reload(true)
    // }, 300);

  }

  
  // ------------

  return (
    <div>
      {routeHome}
      <Modal specialId={modalState.useThisId}>
        <div
          className="content"
          style={{
            background: `${stateToProps.themeColors.background}`,
            color: `${stateToProps.themeColors.color}`,
          }}
        >
          <div className="viewQuestion">
            {askedQuestionData.map((result) => 
            <Question
            key={result.id}
            userImage={result.questionProfileImage}
            whoAskedThisQuestion={result.questionProfileUsername}
            description={result.questionProfileBio}
            userQuestion={result.question}
          >
          </Question>
            )}
            {
            userState.map((result) => 
              <AnswerBox
              specialAnswerStyle="answerBoxSpecialPreviewStyle"
              userImage={result.image}
              whoAnsweredThisQuestion={result.name}
              description={result.bio}
              userAnswer={userAnswer}
            ></AnswerBox>
            )}
          </div>
          <div
            className="AnswerProper"
            style={{
              background: `${stateToProps.themeColors.background}`,
              color: `${stateToProps.themeColors.color}`,
            }}
          >
            <form>
              <i className="fas fa-times" onClick={closeModal}></i>

              <textarea
                onChange={(event) => {
                  SetUserAnswer(event.target.value);
                }}
                placeholder="Start typing your Answer here"
                name=""
                id=""
              ></textarea>
              <button className="sendThis" type="submit" 
              >
                <img
                onClick={sendAnswer}
                  src="https://img.icons8.com/color/50/000000/filled-sent.png"
                  className="sendThis"
                />
              </button>
            </form>
          </div>
        </div>
      </Modal>
      <button onClick={openModal} className="AddAnswerButtonStyles">
        {children}
      </button>
    </div>
  );
}
