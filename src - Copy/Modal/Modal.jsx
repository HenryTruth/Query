import React, { useState } from "react";

import "./Modal.scss";

export default function Modal({
  backdropFunction,
  iconAction,
  specialId,
  children,
  modalClickedFunction,
}) {
  //the modal has no state
  return (
    <div className="Modal" id={specialId} onClick={backdropFunction}>
      {children}
    </div>
  );
}
