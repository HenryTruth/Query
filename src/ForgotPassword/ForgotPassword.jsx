import React from "react";
import "./ForgotPassword.scss";
import Button from "../Button/Button";

function ForgotPassword(props) {
  return (
    <div className="ForgotPassword">
      <div className="designFragment"></div>
      <div className="designFragment2"></div>
      <div className="formProper">
        <form>
          <h4>We'll send you a reset code, open your email to confirm it</h4>
          <input type="email" placeholder="Enter Your Registered Email"></input>
          <div className="buttonWrapper">
            <Button extraStyle="extraStyle">Reset My Password</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
