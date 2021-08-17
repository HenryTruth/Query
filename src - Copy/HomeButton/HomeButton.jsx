import React, { useState } from "react";
import "./HomeButton.scss";

export default function HomeButton() {
  return (
    <React.Fragment>
      <button className="HomeButtonStyles">
        <i className="fab fa-facebook-square"></i>
      </button>
    </React.Fragment>
  );
}
