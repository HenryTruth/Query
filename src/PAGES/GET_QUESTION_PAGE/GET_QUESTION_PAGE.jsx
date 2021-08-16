import React, { useState, useEffect } from "react";
import "./GET_QUESTION_PAGE.scss";
import QuestionBox from "../../QuestionBox/QuestionBox";
import AnswerBox from "../../AnswerBox/AnswerBox";
import Comment from "../../Comment/Comment";

import DetailsButtons from "../../DetailsButtons/DetailsButtons";
import Like from "../../Like/Like";
import CommentButton from "../../CommentButton/CommentButton";

import Date from "../../Date/Date";
import AnswerButton from "../../AnswerButton/AnswerButton";
import user4 from "../../assets/user4.jpg";
import user5 from "../../assets/user5.jpg";
import user7 from "../../assets/user7.jpg";
import user2 from "../../assets/user2.jpg";
import { useSelector, useDispatch } from "react-redux";
// import { changestateToProps } from "../../actions/index";
import AddAnswerButton from "../../AddAnswerButton/AddAnswerButton";
import QuestionSkeletonLoader from "../../SKELETONS/QuestionSkeletonLoader/QuestionSkeletonLoader";

import CommentToBeToggled from '../../commentToBeToggled/commentToBeToggled';
import PostCommentButton from '../../PostCommentButton/PostCommentButton'
import AnswerSkeletonLoader from "../../SKELETONS/AnswerSkeletonLoader/AnswerSkeletonLoader";
import * as actions from '../../store/actions/index';
import axios from "axios";

export default function GET_QUESTION_PAGE() {
  const stateToProps = useSelector(state => 
    state.modesReducer)

  const answerDataState = useSelector(state => state.answerReducer.answerAskedQuestions)
  const askedQuestionData = useSelector(state => state.answerReducer.displayAnsweredQuestion)
  const answerId = useSelector(state => state.answerReducer.answerId)
  const commentDataState = useSelector(state => state.commentReducer.commentAskedQuestions)
  const userState = useSelector(state => state.profileReducer.userDetail)


  const dispatch = useDispatch();
  const [hideState, setHideState] = useState(true);
  const [commentText, setCommentText] = useState("")

  const toggleDiv = (id) => {
    setHideState(!hideState);
    if(hideState == true){
      dispatch(actions.requestCommentDetail(id));
    }
    console.log(hideState,'===')
  };

  useEffect(() => {
    axios.defaults.headers.common['Authorization'] =  localStorage.getItem('token');
    dispatch(actions.requestAnswerDetail(localStorage.getItem('questionId')))
    
  }, []);

  const sendCommentId = (id) => {
    dispatch(actions.requestCommentDetail(id))
    toggleDiv()
  }

  const postComment = (e, id) => {
    e.preventDefault()
    console.log(commentText,'tours only')
    dispatch(actions.postComment(id, commentText))
    if(hideState){
      setTimeout(() => {
      toggleDiv()
    }, 1000);
    }
  }

  useEffect(() => {
    console.log('mounted')
    console.log(userState.length)
    dispatch(actions.requestUserDetails(localStorage.getItem('username')))
  },[])


  console.log(askedQuestionData, 'id logged')


  useEffect(() => {

  },[askedQuestionData])

  const likeHandler = (id, post) => {
    console.log('was dispatched')
    dispatch(actions.getlikedPost(id,post))

  }


  return (
    <div
      className="GET_QUESTION_PAGE"
      style={{ background: `${stateToProps.themeColors.background}` }}
    >
      <div className="questionWrapper">
        {
          askedQuestionData.length < 1 ?
          <React.Fragment><QuestionSkeletonLoader/> <QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/><QuestionSkeletonLoader/></React.Fragment> :
          askedQuestionData.map((result) =>
          <React.Fragment>
            <AddAnswerButton questionId={result.questionId}>Add Answer</AddAnswerButton> 
            <QuestionBox
            key={result.questionId}
            userImage={result.questionProfileImage}
            whoAskedThisQuestion={result.questionProfileUsername}
            description={result.questionProfileBio}
            userQuestion={result.question}
        >
          <DetailsButtons>
            <Like
              likeProps={result.likeNum}
              likeIt={() => likeHandler(result.id, 'question')}
            />
            <AnswerButton answerProps={result.answerNum}/>
            <Date dateProps={result.datePosted}/>
          </DetailsButtons>
          
        </QuestionBox>
          </React.Fragment>

          )
        }
        
          <div className="answerWrapper">
          {answerDataState.map((result) => 
            <AnswerBox
              key={result.id}
              userImage={result.userImage}
              whoAnsweredThisQuestion={result.userAnswer}
              description={result.description}
              userAnswer={result.answer}
            >
              <DetailsButtons>
                <Like
                 likeProps={result.like}
                 likeIt={() => likeHandler(result.id, 'answer')}
                 />
                <CommentButton
                comments={() => sendCommentId(result.id)}
                // commentFunc={toggleDiv}
                commentProps={result.comment}
                />
                <Date dateProps={result.datePosted} />
              </DetailsButtons>
              <div className="EnterYourCommentBlockArea" 
              >
                <div className="currentUserImage">
                  {userState.map((result) => 
                    <img src={`https://res.cloudinary.com/dyojwpsfb/${result.image}`} alt="" /> 
                  )
                  }
                                                                      
                </div>


<div className="inputWrapperArea">


  <form>
    <PostCommentButton
    useThisClass="pcbInputBox"
    useThisClassButtonClass="pcdButton"
    textComment={(event) => {
      setCommentText(event.target.value);
    }}
    submit={(event) => {
      postComment(event, result.id)
    }}
    />
  </form>


</div>

    </div>

           

<CommentToBeToggled toggleDiv={toggleDiv}  key={result.id}
              toggleDiv={() => toggleDiv(result.id)} useThisClass={`hide hide-${hideState?true:false}`}>
  
          {commentDataState.map((result) => 
                <Comment
                  key={result.id}
                  userImage={result.userImage}
                  whoCommentedOnThisQuestion={result.userComment}
                  description="Bsc"
                  userComment={result.comment}
                >
                  <DetailsButtons>
                    <Like 
                    likeIt={() => likeHandler(result.id, 'comment')}
                    likeProps={result.like}
                     />
                    {/* <Date /> */}
                  </DetailsButtons>
                </Comment>
              )}  </CommentToBeToggled>


            </AnswerBox>
          )}
         
          )
        </div>
      </div>
    </div>
  );
}

