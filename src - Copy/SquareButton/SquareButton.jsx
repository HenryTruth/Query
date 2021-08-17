import React from "react";
import "./SquareButton.scss";

const Square = ({ children, specialStyle, functionHandler, type }) => {
  return (
    <button
      type={type}
      onClick={functionHandler}
      className="SquareButtonStyles"
      style={specialStyle}
    >
      {children}
    </button>
  );
};

export default Square;
