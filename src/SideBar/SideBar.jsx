import React, {useCallback} from "react";
import "./SideBar.scss";
import { Link } from "react-router-dom";
import user4 from "../assets/user4.jpg";
import { useSelector, useDispatch } from "react-redux";
import * as actions from '../store/actions/index';

export default function SideBar() {
  const stateToProps = useSelector(state => 
    state.modesReducer)

  const dispatch = useDispatch()
  const userState = useSelector(state => state.profileReducer.userDetail)


  // console.log(location.pathname, "from");

  let image = user4

  if(userState.length >= 1){
    console.log(userState[0].image, 'does it exist')
    image = `https://res.cloudinary.com/dyojwpsfb/${userState[0].image}`
  }

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


  const modeChangerHandler = () => {
    if(stateToProps.modeColor === 'White'){
      dispatch(actions.changemodes('Dark', 'White Mode', darkModescolors))
    }else{
      dispatch(actions.changemodes('White', 'Dark Mode', whiteModescolors))
    }
  }


  return (
    <div
      className="SideBar"
      style={{ background: `${stateToProps.themeColors.background}` }}
    >
      <div
        className="linksWrapper"
        style={{ background: `${stateToProps.themeColors.sideBarUlWrapperBg}` }}
      >
        <ul>
          <Link style={{ textDecoration: "none" }} to="/profile">
            <li className="links proLink">
              <div className="profilePanel">
                <div
                  className="profileArea"
                  style={{
                    background: `${stateToProps.themeColors.background}`,
                    color: `${stateToProps.themeColors.color}`,
                  }}
                >
                  <div className="profilePicture">
                    <img src={image} alt="" />
                  </div>
                  <div className="profileName">
                    <h5>{localStorage.getItem('username')}</h5>
                  </div>
                  <div className="profileAvater"></div>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/home" className="routerLinks">
            <li
              className="links"
              style={{ background: `${stateToProps.themeColors.background}` }}
            >
              <div>
                <Link to="/home">
                  <i className="far fa-home"></i>Home
                </Link>
              </div>
            </li>
          </Link>

          <Link to="/profile" className="routerLinks">
            <li
              className="links"
              style={{ background: `${stateToProps.themeColors.background}` }}
            >
              <div>
                <Link to="/profile">
                  <i className="far fa-user-circle"></i>Profile
                </Link>
              </div>
            </li>
          </Link>
          <li
            className="links"
            onClick={modeChangerHandler}
            style={{ background: `${stateToProps.themeColors.background}` }}
          >
            <div>
              <Link to="#">
                <i className="fas fa-adjust"></i>
                {stateToProps.modeText}
              </Link>
            </div>
          </li>
          <Link to="/" className="routerLinks">
            <li
              className="links"
              style={{ background: `${stateToProps.themeColors.background}` }}
            >
              <div>
                <Link to="/">
                  <i className="fas fa-sign-out-alt"></i>Log out
                </Link>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
