import React from "react";
import "./DevelopersTeam.scss";
import Developers from "../Developers/Developers";
import zucci from "../assets/picture.JPG";
import henry from "../assets/henry.jpg";
import panda from "../assets/panda.JPG";

export default function DevelopersTeam() {
  return (
    <div className="DevelopersTeamStyle">
      <div className="DevelopersTeamHeaderWrapper">
        <h1 className="DevelopersTeamHeader">Developers</h1>
      </div>
      <Developers
        developerImage={henry}
        developerName="Henry Idongesit"
        developerBio="Back End Web Developer"
      />
      <Developers
        developerImage={zucci}
        developerName="Zucci Daniel"
        developerBio="Front End Web Developer"
      />
      <Developers
        developerImage={panda}
        developerName="Eromosele Ifeanyi"
        developerBio="UI/UX Designer and Front End Web Developer"
      />
    </div>
  );
}
