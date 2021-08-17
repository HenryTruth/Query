import React, { useState } from "react";
import "./FixedRoundButton.scss";
import { Link } from "react-router-dom";

export default function FixedRoundButton() {
  const [isToggled, setIsToggled] = useState({
    toggle: false,
  });

  const togglePane = () => {
    const copiedState = isToggled.toggle;
    setIsToggled({
      toggle: !copiedState,
    });
  };

  const log = () => {
    console.log("yes");
  };
  return (
    <div className="fixedWrapper">
      <button onClick={togglePane} className="MobileNavbarToggleStyles">
        {isToggled.toggle ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="far fa-bars"></i>
        )}
      </button>

      <div className="paneWrapper" onClick={log}>
        <div
          onClick={togglePane}
          className={`paneExtraStyle ${
            isToggled.toggle ? `toggleOpen` : `toggleClosed`
          }`}
        >
          <div className="ulWrapper">
            <ul>
              <li>
                <Link to="">
                  Home <i className="far fa-home"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  Create Post <i className="fas fa-sign-out-alt"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  Dark Mode <i className="fas fa-adjust"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  Delete Account <i className="far fa-trash-alt"></i>
                </Link>
              </li>
              <li>
                <Link to="">
                  Log Out <i className="fas fa-sign-out-alt"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

///STATE MANAGEMENT MUST BE HERE, LOL

/*
@import "../index";

.fixedWrapper {
  position: relative;
}

.MobileNavbarToggleStyles {
  background: #73a5de;
  display: grid;
  place-items: center;
  text-align: center;
  position: fixed;
  top: 4%;
  margin: 1rem;
  right: 85%;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  z-index: 1000;
  padding: 0;
  font-size: 1.4rem;
  box-shadow: 0 0 20px 6px rgba(0, 0, 0, 0.171);

  @media (min-width: $tablet) {
    right: 90%;
    top: 4%;
  }
  @media (min-width: $laptop) {
    display: none;
  }
}

.paneWrapper {
  position: absolute;
  top: 0;
  width: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
}

*.paneExtraStyle {
  overflow: hidden;
  position: relative;
  display: grid;
}
.MobileNavbarToggleStyles i {
  color: white;
}

.toggleOpen {
  background: $officialColor;
  background: rgba(0, 0, 0, 0.767);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 900;
  padding: 0;
  display: grid;
  justify-items: end;
  backface-visibility: hidden;

  & .ulWrapper {
    background: $officialColor;
    height: 100%;
    width: 50%;
    display: grid;
    place-items: center;
    transition: all 300ms ease;

    ul {
      height: 30vh;
      margin: auto;
      text-align: center;
      li {
        color: white;
        text-decoration: none;
        list-style: none;
        padding: 1rem;
        position: relative;
        text-transform: capitalize;
        margin: 0.4rem auto;

        a {
          color: white;
          margin: 0.4rem auto;
          text-align: center;
          text-decoration: none;
          list-style: none;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 0.1rem;
          width: 0rem;
          background: white;
          transition: all 0.2s;
          background-origin: left;
        }
        &::after {
          content: "";
          position: absolute;
          top: 0;
          right: 0;
          height: 0.1rem;
          width: 0rem;
          background: white;
          transition: all 0.4s;
          background-origin: right;
        }
        &:hover::before,
        &:hover::after {
          width: 100%;
        }
      }
    }
  }
}

.toggleClosed {
  background: inherit;
  position: fixed;
  top: 0;
  left: 100%;
  right: 0;
  bottom: 0;
  z-index: 100;
  padding: 0;
  display: grid;
  backface-visibility: hidden;
  justify-items: end;
}


*/
