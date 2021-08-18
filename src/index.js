import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

// import your reducers
import modesReducer from './store/reducers/modes' //no need to add the index, becuz webpack automatically looks for the index.js file
import answerReducer from './store/reducers/answer'
import authReducer from './store/reducers/auth'
import questionReducer from './store/reducers/question'
import commentReducer from './store/reducers/comment'
import profileReducer from './store/reducers/profile'



axios.defaults.headers.common['Authorization'] =  localStorage.getItem('token');

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  modesReducer:modesReducer,
  authReducer:authReducer,
  questionReducer:questionReducer,
  answerReducer:answerReducer,
  commentReducer:commentReducer,
  profileReducer:profileReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));


const app = (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="/query">
          <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
  
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

ReactDOM.render( app, document.getElementById( 'root' ) );
registerServiceWorker();
reportWebVitals();
registerServiceWorker();
