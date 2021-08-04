import React from "react";
import "./CreateQuestion.scss";
import Button from "../Button/Button";
import { useSelector, useDispatch } from "react-redux";
import * as MODES from "../actions";


export default function createquestion({ children }) {
  const modes = useSelector((state) => state.modes);
  const dispatch = useDispatch();


  return (
    <div className="CreatePostBoxStyle">
      <div className="CreatePostInitials">
        <div className="CreatePostImage"></div>
        <div className="initials">
          <h3>Okeke Franklyn</h3>
          <p className="CreatePostCareer">Lorem ipsum dolor sit amet </p>
      </div>
      </div>
      <div className="CreatePostAnswer">
        <textarea
          name=""
          placeholder="Ask A Question"
          id=""
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="UserButtonsArea">
        <Button>
          Publish <i className="far fa-upload"></i>
        </Button>
      </div>

      <Button>
        Discard <i className="fal fa-trash"></i>
      </Button>
      {children}
    </div>
  );
}
