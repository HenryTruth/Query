import axios from 'axios';

import * as actionTypes from './actionTypes';


export const getProfileDetails = (profileData) => {
    return {
        type: actionTypes.DISPLAY_PROFILE_DETAILS,
        profileData:profileData
    }
}

export const getUserId = (userId) => {
    return{
        type:actionTypes.GET_USER_ID,
        userId:userId  
    }
}

export const getRequestUserDetails = (detail) => {
    return{
        type:actionTypes.REQUEST_USER_DETAIL,
        detail:detail
    }
}

export const requestUserDetails = (username) => {
    const profileArr = []
    let profileData
    return dispatch => {
        axios.get(`https://querybackendapi.herokuapp.com/api/user/${username}`)
        .then(response => {
            profileData = {
                id:response.data.id,
                name:response.data.bio[0].user.username,
                bio:response.data.bio[0].bio,
                image:response.data.bio[0].image

            }
            profileArr.push(profileData)

            console.log(profileArr, 'some data data')

            dispatch(getRequestUserDetails(profileArr))
        })
    }
}


export const requestProfileDetail = (username) => {
    let userId = null
    const profileArr = []
    let profileData;
    return dispatch => {
        axios.get(`https://querybackendapi.herokuapp.com/api/user/${username}`)
        .then(response => {
            console.log(response.data, 'this data id')
            if(response.data.question.recent.length >= 1){
                for(const i in response.data.question.recent){
                    profileData = {
                        ...profileData,
                        id:response.data.question.recent[i].id,
                        image:response.data.bio[0].image,
                        desc:response.data.bio[0].bio,
                        name: response.data.bio[0].user.username,
                        question:response.data.question.recent[i].question,
                        likeNum:response.data.question.recent[i].like_num,
                        answerNum:response.data.question.recent[i].answer_num,
                        datePosted:response.data.question.recent[i].date_posted
                    }
                    console.log(profileData, '[the data]')
                    profileArr.push(profileData)
                }
                // commentAnswerArr.push(commentData)
            }

            userId = response.data.id

            console.log(profileArr, 'top top')
            dispatch(getProfileDetails(profileArr))
            dispatch(getUserId(userId))
        })
    }
}




export const uploadProfile = (profileId,profileData,profileImage,profileImgName) => {
    console.log(profileImage,profileImgName, 'dat')
    // let image = profileImage
    // let imageName = profileImgName

    const fd = new FormData()
    fd.append('image', profileImage, profileImgName)
    // let post = {
    //     profileData:profileData,
    //     image:profileImage
    
    return dispatch => {
        axios.put(` https://querybackendapi.herokuapp.com/api/profiles/${profileId}/`, fd)
        .then(response => {
            console.log(response)
        })
        .then(err => console.log(err))
    }
}

