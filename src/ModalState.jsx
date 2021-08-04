import React, { useState } from "react";

// const [modalState, SetModalState] = useState({
//   isModalClose: true,
//   useThisId: "ModalIsCloseId",
// });

function Mdlstate([currentState, SetCurrentState]) {
  return (currentState = {
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });
}

export const openModal = (SetCurrentState) => {
  SetCurrentState({
    isModalClose: false,
    useThisId: "ModalIsOpenId",
  });
};

export const closeModal = (SetCurrentState) => {
  SetCurrentState({
    isModalClose: true,
    useThisId: "ModalIsCloseId",
  });
};

export const logg = (callbackFunc = Mdlstate()) => {
  console.log(callbackFunc);
};
