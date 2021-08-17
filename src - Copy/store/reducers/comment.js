import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const commentState = {
    commentAskedQuestions:[],

}

const getComment = (state, action) => {
    return updateObject(state,{
        commentAskedQuestions:action.commentData
    })

}


const reducer = (state = commentState, action) => {
    switch(action.type){
        case actionTypes.DISPLAY_COMMENT_DETAILS:return getComment(state, action)
        default:
            return state
    }

}

export default reducer



