import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PROFILE_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import Profile from "../../Profile/Profile";
import CreateQuestionButton from "../../CreateQuestionButton/CreateQuestionButton";
import CurrentPageIdentifier from "../../CurrentPageIdentifier/CurrentPageIdentifier";
import Modal from "../../Modal/Modal";
import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";
import SquareButton from "../../SquareButton/SquareButton";
import user4 from "../../assets/user4.jpg";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../../actions";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";
import * as actions from '../../store/actions/index';

export default function PROFILE_PAGE() {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const profileDataState = useSelector(state => state.profileReducer.userProfileData)
  const dispatch = useDispatch();

  // const userState = useSelector(state => state.profileReducer.userProfileData)

  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });
  const [smallModalState, SetSmallModalState] = useState(false);
  const [mounted, setmounted] = useState(true)

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
    console.log("HELLO");
  };

  ///
  const showSmallModal = () => {
    SetSmallModalState(!smallModalState);
  };
  const hideSmallModal = () => {
    if (smallModalState) {
      SetSmallModalState(false);
    }

    console.log("COOL");
  };

  useEffect(() => {
    dispatch(actions.requestProfileDetail(localStorage.getItem('username')))
  },[])

  // useEffect(() => {
  //   setmounted(false)

  // },[])


  useEffect(() => {

  },[profileDataState])

  
  //------------

  return (
    <div
      className="ProfilePage"
      onClick={hideSmallModal}
      style={{ background: `${stateToProps.themeColors.background}` }}
    >
      <Modal specialId={modalState.useThisId} backdropFunction={closeModal}>
        <div className="deleteContent">
          <h3>
            Are you sure you want to <span>delete this question?</span>
          </h3>
          <div className="deleteContentButtonWrapper">
            <SquareButton
              specialStyle={{ background: "red" }}
              functionHandler={closeModal}
            >
              yes
            </SquareButton>
            <SquareButton>no</SquareButton>
          </div>
        </div>
      </Modal>

      {/* ////////////// */}
    <CreateQuestionButton>Ask A Question</CreateQuestionButton>
      <CurrentPageIdentifier>
        <i
          className="far fa-user-circle"
          style={{ color: `${stateToProps.themeColors.color}` }}
        ></i>
        <span style={{ color: `${stateToProps.themeColors.color}` }}>Profile</span>
      </CurrentPageIdentifier>

      <Profile>
        <div className="questionWrapper">
          {
            profileDataState.length < 1 ?
            <React.Fragment><QuestionSkeletonLoader/> <QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/></React.Fragment>:
            profileDataState.map((result) => 
            <QuestionBox
            key={result.id}
            userImage={result.image}
            whoAskedThisQuestion={result.name}
            description={result.desc}
            userQuestion={result.question}
          >
            <i
              class="fad fa-ellipsis-h deleteQuestion"
              onClick={showSmallModal}
              style={{
                color: `${stateToProps.themeColors.color}`,
              }}
            ></i>
            <div
              className={smallModalState ? "smallModalOpen" : "smallModalClose"}
              style={{
                background: `${stateToProps.themeColors.background}`,
                color: `${stateToProps.themeColors.color}`,
              }}
            >
              <ul>
                <li onClick={openModal}>Delete</li>
              </ul>
            </div>
            <DetailsButtons>
              <Like likeProps={result.likeNum}/>
              <AnswerButton answerProps={result.answerNum} />
              <Date
              dateProps={result.datePosted}
               />
            </DetailsButtons>
          </QuestionBox>
            )
          }
          
        </div>
      </Profile>
    </div>
  );
}
