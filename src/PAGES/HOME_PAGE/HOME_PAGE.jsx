import React, { useEffect, useState, useRef, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import "./HOME_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import CurrentPageIdentifier from "../../CurrentPageIdentifier/CurrentPageIdentifier";
import { Redirect } from "react-router-dom";
import user7 from "../../assets/user7.jpg";
import user5 from "../../assets/user5.jpg";
import user8 from "../../assets/user8.jpg";
import user2 from "../../assets/user2.jpg";
import CreateQuestionButton from "../../CreateQuestionButton/CreateQuestionButton";
import Comment from "../../Comment/Comment";
import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";
import { useHistory } from "react-router-dom";
import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import CommentButton from "../../CommentButton/CommentButton";
import { useSelector, useDispatch } from "react-redux";
// import { changemodes } from "../../actions";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";
import * as actions from '../../store/actions/index';
import axios from "axios";
import { node } from "prop-types";

export default function HOME_PAGE() {
  useEffect(() => {}, []);
  const questionDataState = useSelector(state => state.questionReducer.recentlyAskedQuestions)

  const [pageNumber, setPageNumber] = useState(1)


  const [refreshPage, setRefreshPage] = useState(true)
  const observer = useRef()
  const lastPostElementRef = useCallback(node => {
    console.log('got here')
    console.log(node, node)
  },[])

  // const lastPostElementRef = useCallback(node => {
  //   console.log('got here')
  //   if(questionDataState.length < 1) return
  //   if(observer.current) observer.current.disconnect()
  //   observer.current = new IntersectionObserver(entries => {
  //     if(entries[0].isIntersecting && questionDataState[0].next !== null){
  //       setPageNumber(prevPageNumber => prevPageNumber + 1)
  //     }
  //   })
  //   if (node) observer.current.observe(node)

  // },[questionDependency, questionDataState.length < 1])

  const stateToProps = useSelector(state => 
    state.modesReducer)

  
  const dispatch = useDispatch();

  console.log(questionDataState, 'question data')
  const history = useHistory();

  const specialQuestionStyle = {
    border: "1px solid  rgba(128, 128, 128, 0.267)",
  };
  const redirectHandler = () => {
    Redirect("/post");
  };



  useEffect(() => {
    if(questionDataState[0] === undefined || questionDataState[0].next !== null){
      dispatch(actions.requestQuestionDetails(pageNumber, questionDataState))
    }
    axios.defaults.headers.common['Authorization'] =  localStorage.getItem('token');
  }, [pageNumber]);

  const userQuestionId = (id) => {
    dispatch(actions.mountAnswer(id))
  }

  const sendQuestionId = (id) => {
    console.log(id, 'from send id')
    dispatch(actions.requestAnswerDetail(id))
    userQuestionId(id)
    localStorage.setItem('questionId', id)
    // history.push('/getpost')
  }

  const likeHandler = (id, post) => {
    console.log('was dispatched')
    dispatch(actions.getlikedPost(id,post))

  }

  const calledIt = () => {
    console.log("this is was selected")
  }

  const gotMore = () =>{
    console.log("got more here")
  }

  const handleScroll = (event) => {
    const {scrollTop, clientHeight, scrollHeight} = event.currentTarget
    console.log(scrollTop, clientHeight, scrollHeight)
    if(scrollHeight - scrollTop === clientHeight){
      setPageNumber(prevPageNumber => prevPageNumber + 1)
    }
    lastPostElementRef()
  }

  

  return (
    // <div
    //   onScroll={handleScroll}
    //   className="homePage"
    //   style={{ background: `${stateToProps.themeColors.background}` }}
    // >
    <div  className="homePage">
<CreateQuestionButton page={pageNumber}>Ask A Question</CreateQuestionButton>

      <CurrentPageIdentifier to="/">
        <i
          className="far fa-home"
          style={{ color: `${stateToProps.themeColors.color}` }}
        ></i>
        <span style={{ color: `${stateToProps.themeColors.color}` }}>Home</span>
      </CurrentPageIdentifier>
      <div className="questionHolder">
        {
          questionDataState.length < 1 ?
          <React.Fragment><QuestionSkeletonLoader/> <QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/></React.Fragment> :
          questionDataState.map((result, index) => {
            if(questionDataState.length === index + 1){
              return <QuestionBox
              ref={lastPostElementRef}
              key={result.id}
              onClick={gotMore}
              linkToWhere="/getpost"
              specialQuestionStyle={specialQuestionStyle}
              userImage={result.userImage}
              whoAskedThisQuestion={result.userQuestions}
              description={result.description}
              userQuestion={result.question}
            >
            <DetailsButtons>
              <Like
              likeIt={() => likeHandler(result.id, 'question')}
              key={result.id}
              likeProps={result.like}
              />
              <AnswerButton
              answerProps={result.answer}
              answers={(() => sendQuestionId(result.id))}
              />
              <Date
              key={result.id}
              dateProps={result.datePosted.slice(0,10)}
               />
            </DetailsButtons>
          </QuestionBox>
            }else{
              return <QuestionBox
              key={result.id}
              onClick={calledIt}
              linkToWhere="/getpost"
              specialQuestionStyle={specialQuestionStyle}
              userImage={result.userImage}
              whoAskedThisQuestion={result.userQuestions}
              description={result.description}
              userQuestion={result.question}
            >
            <DetailsButtons>
              <Like
              likeIt={() => likeHandler(result.id, 'question')}
              key={result.id}
              likeProps={result.like}
              />
              <AnswerButton
              answerProps={result.answer}
              answers={(() => sendQuestionId(result.id))}
              />
              <Date
              key={result.id}
              dateProps={result.datePosted.slice(0,10)}
               />
            </DetailsButtons>
          </QuestionBox>

            }
          }
            )}
      </div>
    </div>
      
    /* </div> */
  );
}
