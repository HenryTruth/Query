import React, { useState, useRef } from "react";
import "./Profile.scss";
import Modal from "../Modal/Modal";
import SquareButton from "../SquareButton/SquareButton";
import user4 from "../assets/user4.jpg";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../store/actions/index';
import { useEffect } from "react";
// import useDisplayImage from '../hooks/useDisplayImage';
// import { changemodes } from "../actions/index";

export default function Profile({ children }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)

  const stateUserId = useSelector(state => state.profileReducer.userId)
  const dispatch = useDispatch();

  const profileState = useSelector(state => state.profileReducer.userProfileData)

  const userState = useSelector(state => state.profileReducer.userDetail)

  let bioRef = useRef();
  //Modal state management
  //onload, dont display the modal, add a style of display none

  const [modalState, SetModalState] = useState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });

  const [bio, setBio] = useState('');
  const [file, setFile] = useState(null)
  const [src, setSrc] = useState()

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

    setBio("click on the + icon to edit your bio");
  };

  const sendBioHandler = () => {
    //POST REQUEST
    alert("posted");
    setBio(bioRef.current.value);
    closeModal();
  };


  // useEffect(() => {
    
  // },[])

  useEffect(() => {
    console.log('doest it dispatch')
    dispatch(actions.requestUserDetails(localStorage.getItem('username')))
  },[])


  


  useEffect(() => {
    
    console.log(userState, 'tototo')
    
    if(file !== null){
      dispatch(actions.uploadProfile(stateUserId,bio, file, file.name))
    }

  },[file])

  
  let image = user4

  if(userState.length >= 1){
    console.log(userState[0].image, 'does it exist')
    image = `https://res.cloudinary.com/dyojwpsfb/${userState[0].image}`
  }



  


  return (
    <React.Fragment>
      <div className="ProfileStyle">
        <Modal specialId={modalState.useThisId}>
          <div className="bioContent">
            <h3>start editing your bio</h3>
            <form>
              <textarea
                onChange={(event) => {
                  setBio(event.target.value);
                }}
                type="text"
                className="bioInput"
                placeholder="Type in a public bio"
              />
              <div className="deleteContentButtonWrapper">
                <SquareButton
                  type="submit"
                  //  functionHandler={sendBioHandler}
                >
                  Done
                </SquareButton>
                <SquareButton
                  specialStyle={{ background: "red" }}
                  functionHandler={closeModal}
                >
                  Discard Bio
                </SquareButton>
              </div>
            </form>
          </div>
        </Modal>
        <div
          className="profileWrapper"
          style={{
            background: `${stateToProps.themeColors.questionBg}`,
            color: `${stateToProps.themeColors.color}`,
          }}
        >
          <div className="ProfilePictureArea">
              {src ? <div
                className="profilePic"
                style={{ backgroundImage: `url(${src})` }}
              >
                <div className="profileCircle2">
                <input
                    type="file"
                    name="file" id="file" accept="image/*"
                    onChange={(e) => {
                      setFile(e.target.files[0])
                      setSrc(URL.createObjectURL(e.target.files[0]))
                    }}
                    
                  />
                <label htmlFor="file">
                <i className="fas fa-image"></i>
                </label>
              </div>
            </div>: <div
                className="profilePic"
                style={{ backgroundImage: `url(${image})` }}
              >
                <div className="profileCircle2">
                <input
                    type="file"
                    name="file" id="file" accept="image/*"
                    onChange={(e) => {
                      setFile(e.target.files[0])
                      setSrc(URL.createObjectURL(e.target.files[0]))
                    }}
                    
                  />
                <label htmlFor="file">
                <i className="fas fa-image"></i>
                </label>
              </div>
            </div>}
              
            <div className="profileCircle1"></div>
          </div>

          <div className="bioArea">
            <h1
              className="profileName"
              style={{
                background: `${stateToProps.themeColors.questionBg}`,
                color: `${stateToProps.themeColors.color}`,
              }}
            >
              {localStorage.getItem('username')}
            </h1>
            <div className="bioDesc">
              <div
                className="bio"
                style={{
                  background: `${stateToProps.themeColors.questionBg}`,
                  color: `${stateToProps.themeColors.color}`,
                }}
              >
                bio
              </div>
              <p>{bio}</p>
            </div>
            <div className="bioEdit" onClick={openModal}>
              <i className="fas fa-plus"></i>
            </div>
          </div>
        </div>

        <h5
          className="yourRecentPost"
          style={{
            color: `${stateToProps.themeColors.color}`,
          }}
        >
          Your recent Questions
        </h5>

        {children}
      </div>
    </React.Fragment>
  );
}
