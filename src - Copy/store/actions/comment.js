import axios from 'axios';

import * as actionTypes from './actionTypes';


export const getCommentDetails = (commentData) => {
    return {
        type: actionTypes.DISPLAY_COMMENT_DETAILS,
        commentData:commentData
    }
}


export const requestCommentDetail = (answerId) => {
    const commentArr = []
    let commentData;
    return dispatch => {
        axios.get(`https://querybackendapi.herokuapp.com/api/answer/${answerId}`)
        .then(response => {
            console.log(response.data, 'this data id')
            if(response.data.comments.length >= 1){
                for(const i in response.data.comments){
                    commentData = {
                        ...commentData,
                        id:response.data.comments[i].id,
                        comment:response.data.comments[i].comment,
                        userImage:response.data.comments[i].profile[0].image,
                        description:response.data.comments[i].profile[0].bio,
                        userComment:response.data.comments[i].profile[0].user.username,
                        like:response.data.comments[i].like_num,
                    }
                    console.log(commentData, '[the data]')
                    commentArr.push(commentData)
                }

                // commentAnswerArr.push(commentData)

            }

            console.log(commentArr, 'top top')
            dispatch(getCommentDetails(commentArr))
            // dispatch(getCommentAnswerArr(commentAnswerArr))
        })
    }
}




export const postComment = (answerId,comment) => {
    console.log(answerId)
    let post = {
        comment:comment
    }
    console.log(post)
    return dispatch => {
        axios.post(`https://querybackendapi.herokuapp.com/api/comment/?type=answer&id=${answerId}`, post)
        .then(response => {
            console.log(response)
            dispatch(requestCommentDetail())
        })
        .then(err => console.log('Somejow'))
    }
}