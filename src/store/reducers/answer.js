import * as actionTypes from '../actions/actionTypes';
// import { getAnswerQuestionArr } from '../actions/answer';
import { updateObject } from '../utility';


const answerState = {
    answerAskedQuestions:[],
    displayAnsweredQuestion:[],
    answerId:null

}

const getAnswer = (state, action) => {
    return updateObject(state,{
        answerAskedQuestions:action.answerData
    })

}

const getAnswerQuestion = (state, action) => {
    return updateObject(state,{
        displayAnsweredQuestion:action.answerQuestionData
    })
}

const getAnswerId = (state, action) => {
    return updateObject(state,{
        answerId:action.answerId
    })
}


const reducer = (state = answerState, action) => {
    switch(action.type){
        case actionTypes.DISPLAY_ANSWER_DETAILS:return getAnswer(state, action)
        case actionTypes.DISPLAY_ANSWER_QUESTION_DATA:return getAnswerQuestion(state,action)
        case actionTypes.GET_ANSWER_ID:return getAnswerId(state,action)
        default:
            return state
    }

}

export default reducer



