import axios from 'axios';

import * as actionTypes from './actionTypes';


export const getAnswerDetails = (answerData) => {
    return {
        type: actionTypes.DISPLAY_ANSWER_DETAILS,
        answerData:answerData
    }
}

export const getAnswerQuestionArr = (answerQuestionData) => {
    return{
        type:actionTypes.DISPLAY_ANSWER_QUESTION_DATA,
        answerQuestionData:answerQuestionData
    }
}


export const mountAnswer = (answerId) => {
    return {
        type:actionTypes.GET_ANSWER_ID,
        answerId:answerId
    }

}


export const requestAnswerDetail = (questionId) => {
    const answerArr = []
    const questionArr = []
    const answerQuestionArr = []
    let convertToArray = []
    let answerData;
    return dispatch => {
        axios.get(`https://querybackendapi.herokuapp.com/api/question/${questionId}`)
        .then(response => {
            convertToArray.push(response.data)
            console.log(response.data, 'this data id')
            if(response.data.answers.length >= 1){
                for(const i in response.data.answers){
                    answerData = {
                        ...answerData,
                        id:response.data.answers[i].id,
                        answer:response.data.answers[i].answer,
                        userImage:response.data.answers[i].profile[0].image,
                        description:response.data.answers[i].profile[0].bio,
                        userAnswer:response.data.answers[i].profile[0].user.username,
                        likeNum:response.data.answers[i].like_num,
                        comment:response.data.answers[i].comment_num,
                        datePosted:response.data.answers[i].date_posted,
                        questionProfileImage:response.data.profile[0].image,
                        questionProfileBio:response.data.profile[0].bio,
                        questionProfileUsername:response.data.profile[0].user.username,
                        questionId:response.data.id,
                        question:response.data.question,
                        datePosted:response.data.date_posted
                    }
                    console.log(answerData, '[the data]')
                    answerArr.push(answerData)
                }

                answerQuestionArr.push(answerData)

            }
            console.log(convertToArray, 'convert')
            for(const i in convertToArray){
                console.log(i, 'response i')
                answerData = {
                    ...answerData,
                    questionId:response.data.id,
                    questionProfileImage:response.data.profile[0].image,
                    questionProfileBio:response.data.profile[0].bio,
                    questionProfileUsername:response.data.profile[0].user.username,
                    questionId:response.data.id,
                    question:response.data.question,
                    datePosted:response.data.date_posted,
                    answerNum:response.data.answer_num,
                    likeNum:response.data.like_num

                }
                console.log(answerData, 'answerData for answer')
                questionArr.push(answerData)
            }
            console.log(questionArr, 'lolo')
            answerQuestionArr.push(answerData)
            console.log(answerArr, 'top top')
            dispatch(getAnswerDetails(answerArr))
            dispatch(getAnswerQuestionArr(questionArr))
        })
    }
}




export const postAnswer = (answer,questionId) => {
    console.log(questionId)
    let post = {
        answer:answer
    }
    console.log(post)
    return dispatch => {
        axios.post(`https://querybackendapi.herokuapp.com/api/answer/?type=question&id=${questionId}`, post)
        .then(response => {
            console.log(response)
            dispatch(requestAnswerDetail(questionId))
        })
        .then(err => console.log('Somejow'))
    }
}