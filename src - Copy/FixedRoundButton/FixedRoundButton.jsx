import React, { useState, useCallback } from "react";
import "./FixedRoundButton.scss";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../store/actions/index';



export default function FixedRoundButton() {
  const [isToggled, setIsToggled] = useState({
    toggle: false,
  });
  // const stateToProps = useSelector((state) => {
  //   return {
  //     modes:state.modeColor,
  //     themeColors:state.themeColors,
  //     modeText:state.modeText
  //   }
  // })
  const stateToProps = useSelector(state => 
    state.modesReducer)

  const dispatch = useDispatch()

  const dispatchToProps = useCallback(dispatch => {
    return {
        onModeChanger:() => dispatch(
          actions.modeChanger()
        )
    };
  },[dispatch])

  const darkModescolors = {
    background: "#1c1b22",
    color: "#fffafa",
    questionBg: "#2B2A33",
    sideBarUlWrapperBg: "#2B2A33",
    borderColor: "#4E9FE7",
  };
  const whiteModescolors = {
    background: "",
    color: "",
    questionBg: "",
    borderColor: "#D2D3E7",
    sideBarUlWrapperBg: "",
  };

  console.log(stateToProps, 'jjjj')


  const modeChangerHandler = () => {
    if(stateToProps.modesColor == 'White'){
      dispatchToProps('Dark', 'White Mode', whiteModescolors)
    }else{
      dispatchToProps('White', 'Dark Mode', darkModescolors)
    }
  }

  const togglePane = () => {
    const copiedState = isToggled.toggle;
    setIsToggled({
      toggle: !copiedState,
    });
  };

  const log = () => {
    console.log("yes");
  };

  let location = useLocation();

  return (
    <div className="fixedWrapper">
      <button
        onClick={togglePane}
        className="MobileNavbarToggleStyles"
        style={{
          background: `${
            location.pathname !== "/" ? stateToProps.themeColors.questionBg : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
          }`,
          border: `1px solid ${stateToProps.themeColors.borderColor}`,
        }}
      >
        {isToggled.toggle ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="far fa-bars"></i>
        )}
      </button>

      <div
        onClick={togglePane}
        className={`paneExtraStyle ${
          isToggled.toggle ? `toggleOpen` : `toggleClosed`
        }`}
      >
        <div
          className="ulWrapper"
          style={{
            background: `${
              location.pathname === "/" ? "" : stateToProps.themeColors.questionBg
            }`,
            color: `${
              location.pathname === "/" ? "" : stateToProps.themeColors.color
            }`,
            border: `1px solid ${stateToProps.themeColors.borderColor}`,
          }}
        >
          <ul className="ulWrapperUl">
            <li>
              <Link to="/home">
                Home <i className="far fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/home">
                About <i className="far fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/home">
                Developers <i className="far fa-home"></i>
              </Link>
            </li>
            <li>
              <Link to="/profile">
                Profile <i className="fas fa-sign-out-alt"></i>
              </Link>
            </li>
            {location.pathname === "/" ? null : (
              <li onClick={modeChangerHandler}>
                <Link to="#">
                  {stateToProps.themeColors.modeText}
                  <i className="fas fa-adjust"></i>
                </Link>
              </li>
            )}
            {location.pathname === "/" ? null : (
              <li>
                <Link to="">
                  Delete Account <i className="far fa-trash-alt"></i>
                </Link>
              </li>
            )}
            {location.pathname === "/" ? null : (
              <li>
                <Link to="">
                  Log Out <i className="fas fa-sign-out-alt"></i>
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

///STATE MANAGEMENT MUST BE HERE, LOL
