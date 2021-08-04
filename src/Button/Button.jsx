import React from "react";
import "./Button.scss";

export default function Button({ children, handler, type }) {
  return (
    <React.Fragment>
      <button className="buttonStyles" onClick={handler} type={type}>
        {children}
      </button>
    </React.Fragment>
  );
}
