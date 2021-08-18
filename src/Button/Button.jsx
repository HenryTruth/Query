import React from "react";
import "./Button.scss";

export default function Button({
  children,
  handler,
  type,
  extraStyle,
  disabled,
}) {
  return (
    <React.Fragment>
      <button
        className={`buttonStyles ${extraStyle}`}
        onClick={handler}
        type={type}
        disabled={disabled}
      >
        {children}
      </button>
    </React.Fragment>
  );
}
