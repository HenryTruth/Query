import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter as Router, useLocation } from "react-router-dom";

import "./Navbar.scss";
import { Link } from "react-router-dom";
import images from "../assets/LogoDesktop.png";
import user4 from "../assets/user4.jpg";
// import * as MODES from "../actions";

export default function Navbar({ children }) {
  const stateToProps = useSelector(state => 
    state.modesReducer)
  const dispatch = useDispatch();
  let location = useLocation();

  console.log(location.pathname, "from");
  return (
    <div
      className="NavbarStyle"
      style={{
        background: `${
          location.pathname !== "/" ? stateToProps.themeColors.background : "inherit"
        }`,
      }}
    >
      <div className="brandName">
        <img src={images} alt="" />
      </div>
      <div className="formDiv">
        <form action="">
          <div className="form-group">
            <input type="text" placeholder="Search Question" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="profileImage">
        <Link to="/profile">
          <img src={user4} alt="" />
        </Link>
      </div>
      <div className="links">
        <ul className="linksUl">
          <li className="linksLi">
            <Link to="/">About</Link>
          </li>
          <li className="linksLi">
            <Link to="/">Developers</Link>
          </li>
        </ul>
      </div>
      {children}
    </div>
  );
}
