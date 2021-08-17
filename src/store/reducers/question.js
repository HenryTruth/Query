import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const questionState = {
    recentlyAskedQuestions:[],

}

const getQuestion = (state, action) => {
    // state.recentlyAskedQuestions.push(...action.questionData)
    return updateObject(state,{
        recentlyAskedQuestions:action.questionData
    })
}


const reducer = (state = questionState, action) => {
    switch(action.type){
        case actionTypes.DISPLAY_QUESTION_DETAILS:return getQuestion(state, action)
        default:
            return state
    }

}

export default reducer


