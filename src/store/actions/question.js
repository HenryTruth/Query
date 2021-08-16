import axios from 'axios';

import * as actionTypes from './actionTypes';



export const getQuestionDetails = (questionData) => {
    return {
        type: actionTypes.DISPLAY_QUESTION_DETAILS,
        questionData:questionData
    }
}


export const requestQuestionDetails = (pageNumber) => {
    const questionArr = []
    let questionData
    let d = 0
    return dispatch => {
        console.log(questionData, 'your questiondata')
        if(pageNumber){
            axios.get(`https://querybackendapi.herokuapp.com/api/question/?page=${pageNumber}`)
            .then(response => {
                console.log(response.data, 'the data')
                for(const i in response.data.results){
                    d = d + 1
                    console.log(i)
                    console.log(response.data.results[i].id, 'id id')
                    questionData = {
                        ...questionData,
                        next:response.data.next,
                        id:response.data.results[i].id,
                        userImage:response.data.results[i].profile[0].image,
                        userQuestions:response.data.results[i].profile[0].user.username,
                        description:response.data.results[i].profile[0].bio,
                        question:response.data.results[i].question,
                        like:response.data.results[i].like_num,
                        datePosted:response.data.results[i].date_posted,
                        answer:response.data.results[i].answer_num

                    }
                    questionArr.push(questionData)
                }
                console.log(questionArr, "main main")
                dispatch(getQuestionDetails(questionArr))
            })
        }else{
            axios.get(`https://querybackendapi.herokuapp.com/api/question/`)
            .then(response => {
                console.log(response.data, 'the data')
                for(const i in response.data.results){
                    d = d + 1
                    console.log(i)
                    console.log(response.data.results[i].id, 'id id')
                    questionData = {
                        ...questionData,
                        next:response.data.next,
                        id:response.data.results[i].id,
                        userImage:response.data.results[i].profile[0].image,
                        userQuestions:response.data.results[i].profile[0].user.username,
                        description:response.data.results[i].profile[0].bio,
                        question:response.data.results[i].question,
                        like:response.data.results[i].like_num,
                        datePosted:response.data.results[i].date_posted,
                        answer:response.data.results[i].answer_num

                    }
                    questionArr.push(questionData)
                }
                console.log(questionArr, "main main")
                dispatch(getQuestionDetails(questionArr))
            })
        }
    }
}


export const postQuestion = (question,page) => {
    console.log('question')
    let post = {
        question:question
    }
    console.log(post)
    return dispatch => {
        axios.post('https://querybackendapi.herokuapp.com/api/question/', post)
        .then(response => {
            console.log(response)
            dispatch(requestQuestionDetails(page))
        })
        .then(err => console.log('Somejow'))
    }
}