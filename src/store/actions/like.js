import axios from 'axios';
import * as actionTypes from './actionTypes';
import {requestQuestionDetails} from './question'
import {requestAnswerDetail} from './answer'
import {requestCommentDetail} from './comment'

export const incrementLikeQuestion = (liked) => {
    return{
        type:actionTypes.INCREMENT_LIKE_QUESTION,
        liked:liked
    }
}

// export const incrementLikeAnswer = (liked) => {
//     return{
//         type:actionTypes.INCREMENT_LIKE_ANSWER,
//         liked:liked
//     }
// }

export const likeQuestion = (response, id, post) => {
    console.log(response.likes.length, 'got it')
    let userAlreadyLiked = false
    let postLike = {
        like:'L'
    }

    return dispatch => {
        for(const i in response.likes){
            console.log('got it here')
            if(response.likes[i].user.username === localStorage.getItem('username')){
                userAlreadyLiked = true
                console.log('sup!!')
    
            }

        }
        if(userAlreadyLiked === false){
            axios.post(`https://querybackendapi.herokuapp.com/api/like/?type=${post}&id=${id}`,postLike)
            .then(result => {
                console.log(result)
                if(post === 'question'){
                    dispatch(requestQuestionDetails())
                }else if(post === 'answer'){
                    dispatch(requestAnswerDetail())
                }else if (post=='comment'){
                    dispatch(requestCommentDetail())
                }
            })

        }       

    }

}


export const getlikedPost = (id, post) => {
    let some = []
    return dispatch => {
        axios.get(`https://querybackendapi.herokuapp.com/api/${post}/${id}`)
        .then(response => {
            some = response.data
            console.log(some)
           dispatch(likeQuestion(response.data, id, post))
        })
    }
}