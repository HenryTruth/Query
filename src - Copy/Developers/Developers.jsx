import React from "react";
import "./Developers.scss";
import images from "../assets/LogoDesktop.png";

export default function Developers({
  children,
  developerImage,
  developerName,
  developerBio,
}) {
  return (
    <div className="DeveloperStyle">
      <div className="developerGrid">
        <div className="pictureArea">
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="picture">
            <img src={developerImage} alt="" />
          </div>
        </div>
        <div className="initialsArea">
          <h4>{developerName}</h4>
        </div>
        <div className="bio">{developerBio}</div>
      </div>

      {children}
    </div>
  );
}
