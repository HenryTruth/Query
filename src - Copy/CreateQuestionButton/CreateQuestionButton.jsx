import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import "./CreateQuestionButton.scss";
import Modal from "../Modal/Modal";
import SquareButton from "../SquareButton/SquareButton";
import * as handlers from "./../ModalState";
import { useSelector, useDispatch } from "react-redux";
import { set } from "react-hook-form";
import * as actions from "../store/actions/index";
import { useHistory } from "react-router-dom";
// import * as MODES from "../actions";

export default function CreateQuestionButton({ children, page }) {
  const stateToProps = useSelector((state) => state.modesReducer);
  const dispatch = useDispatch();
  const history = useHistory();

  const [questionInput, setQuestionInput] = useState("");

  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });

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

  const typedQuestion = (event) => {
    setQuestionInput(event.target.value);
  };
  const routeHome = () => {
    SetModalState({
      isModalClose: true,
      useThisId: "ModalIsCloseId",
    });
  };

  const sendQuestion = (event) => {
    event.preventDefault();
    console.log(questionInput);
    dispatch(actions.postQuestion(questionInput, page));
    routeHome();
  };
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
          <form>
            <div
              className="questionProper"
              style={{
                background: `${stateToProps.themeColors.background}`,
                color: `${stateToProps.themeColors.color}`,
              }}
            >
              <h3 className="header">
                professionals are waiting to recieve your question
              </h3>

              <textarea
                style={{
                  background: `${stateToProps.themeColors.background}`,
                  color: `${stateToProps.themeColors.color}`,
                }}
                placeholder="Start Your question with 'how','where','can','please' etc"
                name=""
                id=""
                cols="30"
                rows="5"
                onChange={typedQuestion}
              ></textarea>
              <button className="sendThis" onSubmit={sendQuestion}>
                <img
                  src="https://img.icons8.com/color/50/000000/filled-sent.png"
                  className="sendThis"
                  onClick={sendQuestion}
                />
              </button>

              <i className="fas fa-times" onClick={closeModal}></i>
            </div>
          </form>

          <div className="more"></div>
        </div>
      </Modal>
      <button onClick={openModal} className="CreateQuestionButtonStyles">
        {children}
      </button>
    </div>
  );
}
