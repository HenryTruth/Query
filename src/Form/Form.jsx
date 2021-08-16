import React, { useState} from "react";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

// import { useLocation } from "react-router-dom";
import useForm from "../hooks/useForm";
import validate from "./LoginFormValidationRules";

import "./Form.scss";
import Button from "../Button/Button";
// import { Link } from "react-router-dom";
// import axios from "axios";

export default function Form({ children }) {
  // let location = useLocation();

  // const [username, setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [isSignup, setiSignup] = useState(true);

  // const [authenticated, setAuthenticated] = useState()

  // let [authRedirect, setAuthRedirect] = useState()

  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validate,
    isSignup
  );

  function login() {
    console.log("No errors, submit callback called!");
  }

  //set a state, to check if login button is clicked
  const [isLoginClicked, setIsLoginClicked] = useState({
    clicked: false,
  });

  //a function that toggles the login clicked or not.

  const showLogin = () => {
    //copy the original state
    // const copiedLoginState = isLoginClicked.clicked;

    //set it to what the initial state is not
    setIsLoginClicked({
      clicked: true,
    });

    setiSignup(false);
  };

  const showSignup = () => {
    //copy the original state
    // const copiedLoginState = isLoginClicked.clicked;

    //set it to what the initial state is not
    setIsLoginClicked({
      clicked: false,
    });

    setiSignup(true);
  };

  // const stateToProps = useSelector((state) => state.modesReducer);

  const authToProps = useSelector((state) => state.authReducer);

  // const dispatch = useDispatch();

  // const dispatchToProps = useCallback(dispatch => {
  //   return {
  //       onAuth: ( email, password, isSignup ) => dispatch( actions.auth( email, password, isSignup )),
  //       onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
  //   };
  // },[dispatch])

  // const SubmitHandler = (event) => {
  //   event.preventDefault()

  // }

  // setAuthenticated(
  //   authToProps.token != null
  // )

  let authenticated = null;

  if (authToProps.token != null) {
    authenticated = <Redirect to={authToProps.authRedirectPath} />;
  }

  return (
    <React.Fragment>
      {authenticated}
      <div className="FormStyle">
        <ul className="nav nav-tabs">
          <li className="active">
            <a onClick={showLogin} href="#">
              lOGIN
            </a>
          </li>
          <li>
            <a onClick={showSignup} href="#" className="signUpHeader">
              SIGN UP
            </a>
          </li>
        </ul>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="Form"
          autoComplete="off"
          noValidate
        >
          <h1> {isLoginClicked.clicked ? "login" : "Sign up"}</h1>
          <div className="form-group">
            <input
              autoComplete="off"
              // type="text"
              placeholder="Username"
              type="username"
              name="username"
              onChange={handleChange}
              value={values.username || ""}
              required
            />
            {errors.username && (
              <p style={{ color: "red" }}>{errors.username}</p>
            )}
          </div>

          {!isLoginClicked.clicked ? (
            <React.Fragment>
              <div className="form-group">
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={values.email || ""}
                  required
                />
                {errors.email && (
                  <p
                    class="errorPara"
                    style={{ color: "red", display: "block" }}
                  >
                    {errors.email}
                  </p>
                )}
              </div>
            </React.Fragment>
          ) : null}

<div className="form-group">
   <input
            autoComplete="off"
            autofill="off"
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={values.password || ""}
            required
          />
          {errors.password && (
            <p style={{ color: "red", display: "block" }}>{errors.password}</p>
          )}
</div>
         

          <Button type="submit">
            <span>{isLoginClicked.clicked ? "login" : "Sign up"}</span>
            <i className="fas fa-arrow-circle-right"></i>
          </Button>
        </form>
      </div>
    </React.Fragment>
  );
}
