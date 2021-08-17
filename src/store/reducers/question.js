import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const questionState = {
    recentlyAskedQuestions:[],

}

const getQuestion = (state, action) => {
<<<<<<< HEAD
=======
    // state.recentlyAskedQuestions.push(...action.questionData)
>>>>>>> 2e1807d320614e862e897702abbdd896c78f9766
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


