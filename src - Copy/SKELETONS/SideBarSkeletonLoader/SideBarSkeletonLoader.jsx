import React from "react";
import "./SideBarSkeletonLoader.scss";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../../actions";

export default function SideBarSkeletonLoader() {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();
  return (
    <div className="SideBarSkeletonLoader">
      <div className="linksWrapper">
        <ul>
          <Link style={{ textDecoration: "none" }} to="/profile">
            <li className="links proLink">
              <div className="profilePanel">
                <div className="profileArea">
                  <div className="profilePicture"></div>
                  <div className="profileName">
                    <h5></h5>
                  </div>
                  <div className="profileAvater"></div>
                </div>
              </div>
            </li>
          </Link>

          <Link to="/home" className="routerLinks">
            <li className="links">
              <div></div>
            </li>
          </Link>

          <Link to="/profile" className="routerLinks">
            <li className="links">
              <div></div>
            </li>
          </Link>
          <li className="links">
            <div></div>
          </li>
          <Link to="/" className="routerLinks">
            <li className="links">
              <div></div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
