import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';


const profileState = {
    userProfileData:[],
    userId:null,
    userDetail:[]

}

const getProfile = (state, action) => {
    return updateObject(state,{
        userProfileData:action.profileData
    })

}

const getId = (state, action) => {
    return updateObject(state,{
        userId:action.userId
    })
}

const requestProfile = (state, action) => {
    return updateObject(state,{
        userDetail:action.detail
    })
}


const reducer = (state = profileState, action) => {
    switch(action.type){
        case actionTypes.DISPLAY_PROFILE_DETAILS: return getProfile(state, action)
        case actionTypes.GET_USER_ID: return getId(state, action)
        case actionTypes.REQUEST_USER_DETAIL: return requestProfile(state, action)
        default:
            return state
    }

}

export default reducer



