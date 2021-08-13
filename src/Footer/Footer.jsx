import React from "react";
import "./Footer.scss";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../actions/index";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

export default function Footer({ children }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const dispatch = useDispatch();

  let location = useLocation();
  return (
    <div
      className="FooterStyle"
      style={{
        background: `${
          location.pathname !== "/" ? stateToProps.themeColors.background : "#ffffff"
        }`,
        color: `${
          location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
        }`,
        display: `${location.pathname === "/" ? "block" : "none"}`,
      }}
    >
      <div
        className="socialMediaBlock"
        style={{
          background: `${
            location.pathname !== "/" ? stateToProps.themeColors.background : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
          }`,
        }}
      >
        <h4 className="mediaHeader">Follow us on socials</h4>
        <div className="socialMedia">
          <a href="/">
            <img src="https://img.icons8.com/color/50/000000/instagram-new--v1.png" alt='icon' />
          </a>

          <a href="/">
            <img src="https://img.icons8.com/color/50/000000/twitter--v1.png" alt='icon' />
          </a>
          <a href="/">
            <img src="https://img.icons8.com/color/50/000000/facebook-new.png" alt='icon' />
          </a>
        </div>
      </div>
      <div
        className="downloadMediaBlock"
        style={{
          background: `${
            location.pathname !== "/" ? stateToProps.themeColors.background : "#ffffff"
          }`,
          color: `${
            location.pathname !== "/" ? stateToProps.themeColors.color : "#000000b7"
          }`,
        }}
      >
        <h4 className="mediaHeader">Download the App</h4>
        <div className="downloadMedia">
          <div className="media1">
            <img src="https://img.icons8.com/color/48/000000/google-play.png" alt='icon'/>
            <p>Google Play</p>
          </div>
          <div className="media2">
            <i className="fab fa-apple"></i>
            <p>Google Play</p>
          </div>
        </div>
      </div>

      <p className="footerClosure">
        copyright @1990 - 2021 Panda co. all rights reserved
      </p>
      {children}
    </div>
  );
}
