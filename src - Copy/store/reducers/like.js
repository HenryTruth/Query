import { requestProfileDetail } from '../actions';
import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const likeState = {
    likedQuestion = null

}

const getLike = (state, action) => {
    return  updateObject(state,{
        likedQuestion:action.liked
    })
}


const reducer = (state = likeState, action) => {
    switch(action.type){
        case actionTypes.INCREMENT_LIKE_QUESTION: return getLike(state, action)
        default:
            return state
    }
}

export default reducer